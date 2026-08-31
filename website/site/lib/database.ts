import { env } from 'cloudflare:workers';

export function database() {
  if (!env.DB) throw new Error('The workshop database is unavailable.');
  return env.DB;
}

export async function ensureDatabase() {
  const db = database();
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS qa_posts (
      id TEXT PRIMARY KEY, display_name TEXT NOT NULL, category TEXT NOT NULL,
      title TEXT NOT NULL, body TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'open',
      created_at TEXT NOT NULL, updated_at TEXT NOT NULL
    )`),
    db.prepare(`CREATE INDEX IF NOT EXISTS qa_posts_created_idx ON qa_posts(created_at)`),
    db.prepare(`CREATE INDEX IF NOT EXISTS qa_posts_category_idx ON qa_posts(category)`),
    db.prepare(`CREATE INDEX IF NOT EXISTS qa_posts_status_idx ON qa_posts(status)`),
    db.prepare(`CREATE TABLE IF NOT EXISTS qa_replies (
      id TEXT PRIMARY KEY, post_id TEXT NOT NULL, display_name TEXT NOT NULL,
      body TEXT NOT NULL, is_instructor INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL, FOREIGN KEY (post_id) REFERENCES qa_posts(id)
    )`),
    db.prepare(`CREATE INDEX IF NOT EXISTS qa_replies_post_idx ON qa_replies(post_id)`),
    db.prepare(`CREATE TABLE IF NOT EXISTS feedback (
      id TEXT PRIMARY KEY, session TEXT NOT NULL, usefulness INTEGER NOT NULL,
      pace TEXT NOT NULL, confidence_before INTEGER, confidence_after INTEGER,
      useful_component TEXT, confusing_component TEXT, missing_support TEXT,
      change_request TEXT, contact_email TEXT, anonymous INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL
    )`),
  ]);
  return db;
}
