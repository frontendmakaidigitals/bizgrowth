// lib/db.js
import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// Ensure the data folder exists
const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

// Path to SQLite DB
const dbPath = path.join(dataDir, "blogs.db");

// Initialize DB
const db = new Database(dbPath);

// Create blogs table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY,
    title TEXT,
    metaTitle TEXT,
    metaDesc TEXT,
    author TEXT,
    category TEXT,
    content TEXT,
    image TEXT,
    createdAt TEXT,
    updatedAt TEXT
  )
`).run();

export default db;
