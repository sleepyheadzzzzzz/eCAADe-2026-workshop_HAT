export const ACCESS_COOKIE = 'hat_workshop_access';
const SESSION_SECONDS = 60 * 60 * 24 * 7;

function secret(name: 'WORKSHOP_PASSCODE' | 'SESSION_SECRET') {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured.`);
  return value;
}

function safeEqual(left: string, right: string) {
  const a = new TextEncoder().encode(left);
  const b = new TextEncoder().encode(right);
  let difference = a.length ^ b.length;
  const length = Math.max(a.length, b.length);
  for (let index = 0; index < length; index += 1) {
    difference |= (a[index % a.length] ?? 0) ^ (b[index % b.length] ?? 0);
  }
  return difference === 0;
}

async function signature(payload: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret('SESSION_SECRET')),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signed = new Uint8Array(
    await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload)),
  );
  return btoa(String.fromCharCode(...signed))
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '');
}

export function passcodeIsValid(candidate: string) {
  return safeEqual(candidate, secret('WORKSHOP_PASSCODE'));
}

export async function createAccessToken() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  return `${expires}.${await signature(String(expires))}`;
}

export async function accessTokenIsValid(token?: string) {
  if (!token) return false;
  const [expiresText, receivedSignature] = token.split('.');
  const expires = Number(expiresText);
  if (!expiresText || !receivedSignature || !Number.isFinite(expires)) return false;
  if (expires <= Math.floor(Date.now() / 1000)) return false;
  return safeEqual(receivedSignature, await signature(expiresText));
}

export const accessCookieOptions = {
  httpOnly: true,
  maxAge: SESSION_SECONDS,
  path: '/',
  sameSite: 'lax' as const,
  secure: process.env.NETLIFY === 'true',
};
