import Link from 'next/link';
import { ArrowLeft, LockKeyhole } from 'lucide-react';
import { AccessForm } from '@/components/access-form';

export const metadata = { title: 'Participant access' };

export default function AccessPage() {
  return (
    <main className="access-page">
      <Link href="/" className="back-link"><ArrowLeft size={16} /> Back to workshop overview</Link>
      <section className="access-card">
        <div className="access-icon"><LockKeyhole size={27} /></div>
        <p className="section-kicker">Participant access</p>
        <h1>Enter the workshop hub</h1>
        <p>Use the shared passcode supplied by the tutors to open the curriculum, learning materials, Q&amp;A and feedback channels.</p>
        <AccessForm />
        <small>Do not share restricted workshop material outside the participant group.</small>
      </section>
    </main>
  );
}
