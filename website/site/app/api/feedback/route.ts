import { NextRequest, NextResponse } from 'next/server';
import { ensureDatabase } from '@/lib/database';
import { requestHasAccess } from '@/lib/request-access';

function text(value: unknown, maximum = 2500) {
  return typeof value === 'string' ? value.trim().slice(0, maximum) : '';
}
function score(value: unknown) {
  const number = Number(value);
  return Number.isInteger(number) && number >= 1 && number <= 5 ? number : null;
}

export async function POST(request: NextRequest) {
  if (!(await requestHasAccess(request))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = (await request.json()) as Record<string, unknown>;
  const session = text(body.session, 80);
  const usefulness = score(body.usefulness);
  const pace = text(body.pace, 40);
  if (!session || !usefulness || !pace) return NextResponse.json({ error: 'Please complete the session, usefulness and pace fields.' }, { status: 400 });
  const db = await ensureDatabase();
  await db.prepare(`INSERT INTO feedback (
    id, session, usefulness, pace, confidence_before, confidence_after,
    useful_component, confusing_component, missing_support, change_request,
    contact_email, anonymous, created_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(
    crypto.randomUUID(), session, usefulness, pace, score(body.confidenceBefore),
    score(body.confidenceAfter), text(body.usefulComponent), text(body.confusingComponent),
    text(body.missingSupport), text(body.changeRequest), text(body.contactEmail, 160),
    body.anonymous === false ? 0 : 1, new Date().toISOString(),
  ).run();
  return NextResponse.json({ ok: true }, { status: 201 });
}
