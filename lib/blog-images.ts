import path from "path";
import fs from "fs/promises";
import { randomUUID } from "crypto";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "blog");

export async function saveImage(file: File): Promise<string> {
  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  // Always use UUID + original extension — never use original filename (may have spaces)
  const originalExt = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const ext = ["jpg", "jpeg", "png", "webp", "gif"].includes(originalExt)
    ? originalExt
    : "jpg";

  const filename = `${randomUUID()}.${ext}`;
  const filepath = path.join(UPLOAD_DIR, filename);

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(filepath, buffer);

  return `/uploads/blog/${filename}`;
}

export async function deleteImage(publicPath: string) {
  try {
    const abs = path.join(process.cwd(), "public", publicPath);
    await fs.unlink(abs);
  } catch {
    // File may not exist — ignore
  }
}