import { NextRequest, NextResponse } from 'next/server';
import { listQaPosts, saveQaPost } from '@/lib/netlify-storage';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

function clean(value: unknown, maximum: number) {
  return typeof value === 'string' ? value.trim().slice(0, maximum) : '';
}

export async function GET() {
  return NextResponse.json(
    { posts: await listQaPosts() },
    { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0' } },
  );
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Record<string, unknown>;
  const displayName = clean(body.displayName, 80);
  const category = clean(body.category, 40);
  const title = clean(body.title, 140);
  const question = clean(body.body, 2500);
  if (!displayName || !category || !title || !question) return NextResponse.json({ error: 'Please complete every field.' }, { status: 400 });
  const id = crypto.randomUUID();
  await saveQaPost({
    id,
    display_name: displayName,
    category,
    title,
    body: question,
    status: 'open',
    created_at: new Date().toISOString(),
    answers: [],
  });
  return NextResponse.json({ ok: true, id }, { status: 201 });
}
