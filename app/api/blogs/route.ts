import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import db from "@/lib/db";
import zlib from "zlib";
export async function GET() {
  try {
    const blogs = db.prepare("SELECT * FROM blogs ORDER BY updatedAt DESC").all();

    interface CompressedBlog extends Blog {
      content: string;
    }

    const processedBlogs: Blog[] = blogs.map((blog: CompressedBlog) => {
      if (blog.content?.startsWith("gz:")) {
        try {
          const compressed: Buffer = Buffer.from(blog.content.slice(3), "base64");
          blog.content = zlib.gunzipSync(compressed).toString("utf-8");
        } catch (err: unknown) {
          console.warn("Failed to decompress blog", blog.id, err);
        }
      }
      return blog;
    });

    return NextResponse.json({ blogs: processedBlogs });
  } catch (err) {
    console.error("Error reading blogs:", err);
    return NextResponse.json({ success: false, error: "Failed to fetch blogs" }, { status: 500 });
  }
}

interface Blog {
  id: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  author: string;
  category: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogFormData {
  title: string | null;
  metaTitle: string | null;
  metaDesc: string | null;
  author: string | null;
  category: string | null;
  content: string | null;
  image: File | null;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string | null;
    const metaTitle = formData.get("metaTitle") as string | null;
    const metaDesc = formData.get("metaDesc") as string | null;
    const author = formData.get("author") as string | null;
    const category = formData.get("category") as string | null;
    const content = formData.get("content") as string | null;
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file uploaded" },
        { status: 400 }
      );
    }

    // ✅ Save image in data/uploads
    const uploadsDir = path.join(process.cwd(), "data", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, file.name);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    const imageUrl = file.name;

    const id = uuidv4();
    const now = new Date().toISOString();

    // ✅ Insert into SQLite
    const info = db
      .prepare(
        `INSERT INTO blogs 
   (title, metaTitle, metaDesc, author, category, content, image, createdAt, updatedAt)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .run(
        title ?? "",
        metaTitle ?? "",
        metaDesc ?? "",
        author ?? "",
        category ?? "",
        content ?? "",
        imageUrl ?? "",
        now,
        now
      );

    const blog: Blog = {
      id: info.lastInsertRowid.toString(),
      title: title ?? "",
      metaTitle: metaTitle ?? "",
      metaDesc: metaDesc ?? "",
      author: author ?? "",
      category: category ?? "",
      content: content ?? "",
      image: imageUrl,
      createdAt: now,
      updatedAt: now,
    };

    return NextResponse.json({ success: true, blog });
  } catch (err) {
    console.error("Error creating blog:", err);
    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 }
    );
  }
}

interface DeleteBlogRequest extends Request {}

interface DeleteBlogResponse {
  success: boolean;
  error?: string;
  blogs?: Blog[];
}

export async function DELETE(req: DeleteBlogRequest): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const id: string | null = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing id" } as DeleteBlogResponse,
        { status: 400 }
      );
    }

    const blog: Blog | undefined = db.prepare(
      "SELECT * FROM blogs WHERE id = ?"
    );
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" } as DeleteBlogResponse,
        { status: 404 }
      );
    }

    // ✅ Delete associated image
    if (blog.image) {
      const imagePath: string = path.join(
        process.cwd(),
        "data/uploads",
        blog.image
      );
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // ✅ Delete blog from SQLite
    db.prepare("DELETE FROM blogs WHERE id = ?").run(id);

    const blogs: Blog[] = db
      .prepare("SELECT * FROM blogs ORDER BY updatedAt DESC")
      .all();

    return NextResponse.json({ success: true, blogs } as DeleteBlogResponse);
  } catch (err) {
    console.error("Error deleting blog:", err);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" } as DeleteBlogResponse,
      { status: 500 }
    );
  }
}
