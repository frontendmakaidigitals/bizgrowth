import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import zlib from "zlib";
import { dbGet, dbRun } from "@/lib/db";

const uploadsDir = path.join(process.cwd(), "data/uploads");

// --- PUT (Update blog) ---
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const formData = await req.formData();

    // Check if blog exists
    const existing = await dbGet("SELECT * FROM blogs WHERE id = ?", [id]);
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // Extract form fields
    const title = formData.get("title");
    const metaTitle = formData.get("metaTitle");
    const metaDesc = formData.get("metaDesc");
    const author = formData.get("author");
    const category = formData.get("category");
    const rawContent = formData.get("content");
    const file = formData.get("image");

    // --- Compress content ---
    let content = existing.content;
    if (typeof rawContent === "string" && rawContent.length > 0) {
      const compressed = zlib.gzipSync(rawContent);
      content = "gz:" + compressed.toString("base64");
    }

    // --- Handle image ---
    let image = existing.image;
    if (file instanceof File && file.size > 0) {
      await fs.promises.mkdir(uploadsDir, { recursive: true });

      // Delete old image if new one is different
      if (image && image !== file.name) {
        const oldPath = path.join(uploadsDir, image);
        if (fs.existsSync(oldPath)) {
          try {
            await fs.promises.unlink(oldPath);
          } catch (err) {
            console.warn("⚠️ Failed to delete old image:", err);
          }
        }
      }

      const newPath = path.join(uploadsDir, file.name);
      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.promises.writeFile(newPath, buffer);
      image = file.name;
    }

    const now = new Date().toISOString();

    // --- Update SQLite record ---
    await dbRun(
      `UPDATE blogs
       SET title = ?, metaTitle = ?, metaDesc = ?, author = ?, category = ?, content = ?, image = ?, updatedAt = ?
       WHERE id = ?`,
      [title, metaTitle, metaDesc, author, category, content, image, now, id]
    );

    // Get updated blog
    const updated = await dbGet("SELECT * FROM blogs WHERE id = ?", [id]);

    return NextResponse.json({ success: true, blog: updated });
  } catch (err) {
    console.error("Update failed:", err);
    return NextResponse.json(
      { success: false, error: "Update failed" },
      { status: 500 }
    );
  }
}

// --- GET (Fetch single blog) ---
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const blog = await dbGet("SELECT * FROM blogs WHERE id = ?", [id]);

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // --- Decompress content if gzipped ---
    if (blog.content?.startsWith("gz:")) {
      try {
        const compressed = Buffer.from(blog.content.slice(3), "base64");
        const decompressed = zlib.gunzipSync(compressed).toString("utf-8");
        blog.content = decompressed;
      } catch (err) {
        console.warn("⚠️ Failed to decompress content for blog:", id, err);
      }
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

// --- DELETE (Remove blog) ---
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    // Check if blog exists and get image info
    const existing = await dbGet("SELECT * FROM blogs WHERE id = ?", [id]);
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // Delete associated image file
    if (existing.image) {
      const imagePath = path.join(uploadsDir, existing.image);
      if (fs.existsSync(imagePath)) {
        try {
          await fs.promises.unlink(imagePath);
        } catch (err) {
          console.warn("⚠️ Failed to delete image file:", err);
        }
      }
    }

    // Delete from database
    await dbRun("DELETE FROM blogs WHERE id = ?", [id]);

    return NextResponse.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Delete failed:", err);
    return NextResponse.json(
      { success: false, error: "Delete failed" },
      { status: 500 }
    );
  }
}