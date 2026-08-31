'use client';

import { useState } from 'react';
import { ArrowRight, KeyRound, LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function AccessForm({ compact = false }: { compact?: boolean }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/access', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });
      if (!response.ok) {
        setError('That passcode was not recognized. Please check it and try again.');
        return;
      }
      router.push('/workshop');
      router.refresh();
    } catch {
      setError('Access is temporarily unavailable. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className={compact ? 'access-form access-form-compact' : 'access-form'}>
      <label htmlFor={compact ? 'compact-passcode' : 'passcode'}><KeyRound size={16} /> Workshop passcode</label>
      <div className="access-input-row">
        <input id={compact ? 'compact-passcode' : 'passcode'} type="password" value={passcode} onChange={(event) => setPasscode(event.target.value)} placeholder="Enter passcode" autoComplete="current-password" required />
        <button type="submit" aria-label="Enter participant hub" disabled={loading}>{loading ? <LoaderCircle className="spin" size={18} /> : <ArrowRight size={18} />}</button>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
