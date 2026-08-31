'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className="logout-button"
      onClick={async () => {
        await fetch('/api/logout', { method: 'POST' });
        router.push('/');
        router.refresh();
      }}
      type="button"
    >
      <LogOut size={15} /> Exit
    </button>
  );
}
