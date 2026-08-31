import { NextRequest } from 'next/server';
import { ACCESS_COOKIE, accessTokenIsValid } from './access';

export function requestHasAccess(request: NextRequest) {
  return accessTokenIsValid(request.cookies.get(ACCESS_COOKIE)?.value);
}
