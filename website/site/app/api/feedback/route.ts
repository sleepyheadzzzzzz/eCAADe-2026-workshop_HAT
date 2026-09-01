import { NextRequest, NextResponse } from 'next/server';
import { saveFeedback } from '@/lib/netlify-storage';
import { requestHasAccess } from '@/lib/request-access';

export const runtime = 'nodejs';

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
  const id = crypto.randomUUID();
  await saveFeedback(id, {
    id,
    session,
    usefulness,
    pace,
    confidence_before: score(body.confidenceBefore),
    confidence_after: score(body.confidenceAfter),
    useful_component: text(body.usefulComponent),
    confusing_component: text(body.confusingComponent),
    missing_support: text(body.missingSupport),
    change_request: text(body.changeRequest),
    contact_email: text(body.contactEmail, 160),
    anonymous: body.anonymous === false ? 0 : 1,
    created_at: new Date().toISOString(),
  });
  return NextResponse.json({ ok: true }, { status: 201 });
}
