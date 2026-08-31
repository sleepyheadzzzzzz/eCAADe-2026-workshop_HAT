import { QaBoard } from '@/components/qa-board';

export const metadata = { title: 'Q&A channel' };

export default function QaPage() {
  return <><p className="hub-eyebrow">Shared participant channel</p><h1 className="hub-title">Questions &amp; answers</h1><p className="hub-lede">Use this visible channel for technical and conceptual questions that may help other participants. Do not include confidential project information or personal data.</p><QaBoard /></>;
}
