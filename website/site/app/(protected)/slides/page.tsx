import { Download, FileText } from 'lucide-react';

export const metadata = { title: 'PDF slides' };

const base = '/downloads/slides';
const decks = [
  ['01','Workshop overview','Introduction, tutors, schedule and expected outcomes.','Workshop_Overview.pdf'],
  ['02','Methodology','Surrogate models, feature extraction, validation, SHAP, deployment and optimization.','Methodology.pdf'],
  ['03','Urban-tree case','Tree point clouds, carbon modelling, environmental diagnosis and design application.','Urban_Tree_Case.pdf'],
  ['04','Participant exercises','Thermal comfort, construction carbon, street vitality and spatial-safety exercises.','Participant_Exercises.pdf'],
];

export default function SlidesPage() {
  return <>
    <p className="hub-eyebrow">03 / Downloadable teaching decks</p><h1 className="hub-title">PDF<br />slides</h1>
    <p className="hub-lede">The four workshop decks are available as PDFs. They open in a new tab and can be saved for offline use.</p>
    <div className="download-grid">{decks.map(([number,title,text,file]) => <a className="download-card" href={`${base}/${file}`} target="_blank" rel="noreferrer" key={file}><FileText size={22} /><span>{number}</span><h2>{title}</h2><p>{text}</p><strong>Open or download PDF <Download size={13} /></strong></a>)}</div>
    <section className="content-section"><div className="notice-banner"><strong>Slide update policy</strong><p>These PDFs reflect the current workshop draft. Revised files can replace them without changing this page or its navigation.</p><span>Last organized for participant release · September 2026</span></div></section>
  </>;
}
