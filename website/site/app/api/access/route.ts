import { NextRequest, NextResponse } from 'next/server';
import {
  ACCESS_COOKIE,
  accessCookieOptions,
  createAccessToken,
  passcodeIsValid,
} from '@/lib/access';

export async function POST(request: NextRequest) {
  let passcode = '';
  try {
    const body = (await request.json()) as { passcode?: unknown };
    passcode = typeof body.passcode === 'string' ? body.passcode : '';
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (!passcodeIsValid(passcode)) {
    return NextResponse.json({ error: 'Invalid passcode.' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ACCESS_COOKIE, await createAccessToken(), accessCookieOptions);
  return response;
}
