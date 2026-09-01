import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { QaBoard } from '@/components/qa-board';

export const metadata = { title: 'Public Q&A' };

export default function QaPage() {
  return <main className="public-qa-page">
    <header className="public-qa-header">
      <Link className="back-link public-back-link" href="/"><ArrowLeft size={15} /> Workshop home</Link>
      <p className="hub-eyebrow">Public workshop record</p>
      <h1 className="hub-title">Questions &amp;<br />answers</h1>
      <p className="hub-lede">Everyone can read the questions, answers and dated discussion record. Participants may also post or reply. Do not include confidential information or personal data.</p>
    </header>
    <QaBoard />
    <footer className="public-qa-credit">Web developed by Yao Chaowen · <a href="mailto:chaowen.yao@aalto.fi">chaowen.yao@aalto.fi</a> · <a href="mailto:vinceyao@outlook.com">vinceyao@outlook.com</a></footer>
  </main>;
}
