import { NextRequest, NextResponse } from 'next/server';
import { addQaAnswer } from '@/lib/netlify-storage';

export const runtime = 'nodejs';

function clean(value: unknown, maximum: number) {
  return typeof value === 'string' ? value.trim().slice(0, maximum) : '';
}

export async function POST(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = (await request.json()) as Record<string, unknown>;
  const displayName = clean(body.displayName, 80);
  const answerBody = clean(body.body, 2500);
  if (!displayName || !answerBody) {
    return NextResponse.json({ error: 'Please enter your name and answer.' }, { status: 400 });
  }

  const result = await addQaAnswer(id, {
    id: crypto.randomUUID(),
    display_name: displayName,
    body: answerBody,
    created_at: new Date().toISOString(),
  });
  if ('reason' in result && result.reason === 'not_found') return NextResponse.json({ error: 'Question not found.' }, { status: 404 });
  if ('reason' in result) return NextResponse.json({ error: 'Another answer was saved at the same time. Please submit again.' }, { status: 409 });
  return NextResponse.json({ ok: true, post: result.post }, { status: 201 });
}
