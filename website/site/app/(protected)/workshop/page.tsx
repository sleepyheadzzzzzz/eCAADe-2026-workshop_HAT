import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Laptop, MapPin, Users } from 'lucide-react';

export const metadata = { title: 'Workshop overview' };

const cards = [
  ['Setup guide', 'Prepare Rhino, Colab or local Python, then run the readiness check.', '/setup'],
  ['Slides', 'Download the overview, methodology, case and exercise PDF decks.', '/slides'],
  ['Codes & samples', 'Model-training files and plugin encapsulation are separated clearly.', '/codes'],
  ['Discussion', 'Interactive participant Q&A and a separate private feedback channel.', '/discussion'],
];

export default function WorkshopPage() {
  return <>
    <p className="hub-eyebrow">01 / Overview</p><h1 className="hub-title">One complete<br />design–AI loop.</h1>
    <p className="hub-lede">Begin with setup, then move through the PDF slides, model and plugin resources, and the two interactive discussion channels.</p>
    <div className="hub-card-grid">{cards.map(([title,text,href]) => <Link className="hub-card" href={href} key={title}><span className="card-index">{String(cards.findIndex(card => card[0] === title)+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p><ArrowRight className="hub-card-arrow" size={17} /></Link>)}</div>
    <section className="content-section" id="facts"><h2>At a glance</h2><div className="fact-grid"><div><Clock size={18} /><span>7–8 September 2026<br /><strong>09:30–17:00</strong></span></div><div><MapPin size={18} /><span>Technische Hochschule Lübeck<br /><strong>Zoom E.1 14-0.08</strong></span></div><div><Users size={18} /><span>Collaborative cohort<br /><strong>15–20 participants</strong></span></div><div><Laptop size={18} /><span>Bring a laptop<br /><strong>Rhino + Colab/Python</strong></span></div></div></section>
    <section className="content-section" id="workflow"><h2>Workshop workflow</h2><figure className="content-image"><Image src="/slides/introduction/overview-5.png" alt="Workshop workflow from environmental evidence to design" width={1600} height={900} /><figcaption>Extract → train → validate → explain → encapsulate → design.</figcaption></figure></section>
    <section className="content-section"><div className="notice-banner"><strong>Before you arrive</strong><p>Confirm that Rhino/Grasshopper runs and open the supplied environment-check notebook in Colab or local Jupyter.</p><Link href="/setup">Open setup guide <ArrowRight size={14} /></Link></div></section>
  </>;
}
