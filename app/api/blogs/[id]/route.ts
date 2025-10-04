import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";

function readDb() {
  const dbPath = path.join(process.cwd(), "data", "db.json");
  const file = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(file);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const formData = await req.formData();
    const db = await readDb();

    const blog = db.blogs.find((b: any) => b.id == id);
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // Update text fields
    blog.title = formData.get("title") as string;
    blog.metaTitle = formData.get("metaTitle") as string;
    blog.metaDesc = formData.get("metaDesc") as string;
    blog.author = formData.get("author") as string;
    blog.category = formData.get("category") as string;
    blog.content = formData.get("content") as string;

    // Handle image upload
    const file = formData.get("image") as File | null;

    if (file && file.size > 0) {
      const uploadsDir = path.join(process.cwd(), "data/uploads");
      if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

      // Delete old image if different
      if (blog.image && blog.image !== file.name) {
        const oldImagePath = path.join(uploadsDir, blog.image);
        if (fs.existsSync(oldImagePath)) {
          try {
            await fsPromises.unlink(oldImagePath);
            console.log(`🗑️ Deleted old image: ${oldImagePath}`);
          } catch (err) {
            console.error("⚠️ Failed to delete old image:", err);
          }
        }
      }

      // Save new image
      const buffer = Buffer.from(await file.arrayBuffer());
      const filePath = path.join(uploadsDir, file.name);
      await fsPromises.writeFile(filePath, buffer);

      blog.image = file.name;
    }

    // Save updated DB
    await writeDb(db);

    return NextResponse.json({ success: true, blog });
  } catch (err) {
    console.error("Update failed:", err);
    return NextResponse.json(
      { success: false, error: "Update failed" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const db = readDb();
    const blog = db.blogs.find((b: any) => String(b.id) === id);

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog });
  } catch (err) {
    console.error("Fetch failed:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
