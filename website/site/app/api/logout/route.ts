import { NextResponse } from 'next/server';
import { ACCESS_COOKIE } from '@/lib/access';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ACCESS_COOKIE, '', { httpOnly: true, maxAge: 0, path: '/' });
  return response;
}
