import { NextRequest, NextResponse } from 'next/server';
import { ensureDatabase } from '@/lib/database';
import { requestHasAccess } from '@/lib/request-access';

function clean(value: unknown, maximum: number) {
  return typeof value === 'string' ? value.trim().slice(0, maximum) : '';
}

export async function GET(request: NextRequest) {
  if (!(await requestHasAccess(request))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const db = await ensureDatabase();
  const result = await db.prepare('SELECT id, display_name, category, title, body, status, created_at FROM qa_posts ORDER BY created_at DESC LIMIT 100').all();
  return NextResponse.json({ posts: result.results });
}

export async function POST(request: NextRequest) {
  if (!(await requestHasAccess(request))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = (await request.json()) as Record<string, unknown>;
  const displayName = clean(body.displayName, 80);
  const category = clean(body.category, 40);
  const title = clean(body.title, 140);
  const question = clean(body.body, 2500);
  if (!displayName || !category || !title || !question) return NextResponse.json({ error: 'Please complete every field.' }, { status: 400 });
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  const db = await ensureDatabase();
  await db.prepare('INSERT INTO qa_posts (id, display_name, category, title, body, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind(id, displayName, category, title, question, 'open', now, now).run();
  return NextResponse.json({ ok: true, id }, { status: 201 });
}
