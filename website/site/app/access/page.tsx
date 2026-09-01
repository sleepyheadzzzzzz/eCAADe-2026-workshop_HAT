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
        <aside className="internal-use-notice" role="note">
          <strong>Internal use only</strong>
          <p>This material is strictly for workshop participants. Please do not share this link publicly, reproduce, or use the content commercially. All technical content is for educational purposes only. The author assumes no liability for any data loss or system damage resulting from the use or misuse of this guide. Please always practice in a safe testing environment.</p>
        </aside>
        <AccessForm />
      </section>
    </main>
  );
}
