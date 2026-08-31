import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Laptop, MapPin, Users } from 'lucide-react';

export const metadata = { title: 'Workshop overview' };

const cards = [
  ['Curriculum', 'Seven connected modules and their concrete outputs.', '/curriculum'],
  ['Methodology', 'Data, validation, SHAP, ONNX and design application.', '/methodology'],
  ['Materials', 'Slides, code, sample data and reserved downloads.', '/materials'],
  ['Q&A', 'A visible channel for shared participant questions.', '/qa'],
];

export default function WorkshopPage() {
  return <>
    <p className="hub-eyebrow">01 / Overview</p><h1 className="hub-title">One complete<br />design–AI loop.</h1>
    <p className="hub-lede">This hub organizes the exact path from workshop framing to reproducible modelling, explanation, deployment and participant discussion.</p>
    <div className="hub-card-grid">{cards.map(([title,text,href]) => <Link className="hub-card" href={href} key={title}><span className="card-index">{String(cards.findIndex(card => card[0] === title)+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p><ArrowRight className="hub-card-arrow" size={17} /></Link>)}</div>
    <section className="content-section" id="facts"><h2>At a glance</h2><div className="fact-grid"><div><Clock size={18} /><span>7–8 September 2026<br /><strong>09:30–17:00</strong></span></div><div><MapPin size={18} /><span>Hybrid delivery<br /><strong>Room + Zoom</strong></span></div><div><Users size={18} /><span>Collaborative cohort<br /><strong>15–20 participants</strong></span></div><div><Laptop size={18} /><span>Bring a laptop<br /><strong>Rhino + Colab/Python</strong></span></div></div></section>
    <section className="content-section" id="workflow"><h2>Workshop workflow</h2><figure className="content-image"><Image src="/slides/introduction/overview-4.png" alt="Workshop workflow from environmental evidence to design" width={1600} height={900} /><figcaption>Extract → train → validate → explain → encapsulate → design.</figcaption></figure></section>
    <section className="content-section"><div className="notice-banner"><strong>Before you arrive</strong><p>Confirm that Rhino/Grasshopper runs on your laptop and that you can open Google Colab or a local Jupyter environment.</p><span>Environment setup tutorial · To be published soon</span></div></section>
  </>;
}
