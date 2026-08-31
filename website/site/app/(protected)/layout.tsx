import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ParticipantShell } from '@/components/participant-shell';
import { ACCESS_COOKIE, accessTokenIsValid } from '@/lib/access';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const isValid = await accessTokenIsValid(cookieStore.get(ACCESS_COOKIE)?.value);
  if (!isValid) redirect('/access');
  return <ParticipantShell>{children}</ParticipantShell>;
}
