import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = { title: 'Participant materials' };

const sections = [
  ['Setup guide','Guide, environment-check notebook, local fallback and Zoom placeholder.','/setup'],
  ['Slides, recordings & Miro','PDF teaching decks, session recordings and the Day 2 collaboration board.','/slides'],
  ['Codes & samples','Model training, data, verified outputs and plugin encapsulation.','/codes'],
  ['Discussion','Interactive Q&A and a separate private feedback form.','/discussion'],
];

export default function MaterialsPage() {
  return <>
    <p className="hub-eyebrow">Participant channel</p><h1 className="hub-title">Materials<br />index</h1>
    <p className="hub-lede">Workshop resources have moved into four participant sections. This legacy address remains as a stable index.</p>
    <div className="hub-card-grid">{sections.map(([title,text,href], index) => <Link className="hub-card" href={href} key={title}><span className="card-index">{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p><ArrowRight className="hub-card-arrow" size={17} /></Link>)}</div>
  </>;
}
