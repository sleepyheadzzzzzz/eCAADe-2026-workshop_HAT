import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata = { title: 'Workshop materials' };

const groups = [
  ['Introduction', [
    ['Workshop overview and slide previews','Available','https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/tree/main/introduction'],
    ['Online Zoom link','To be published soon',null],
    ['Environment-setting tutorial','To be published soon',null],
  ]],
  ['Methodology', [
    ['Methodology slide previews','Available','https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/tree/main/materials/slides/methodology'],
    ['Full downloadable methodology deck','To be published soon',null],
  ]],
  ['Model training', [
    ['Google Colab notebook','Available','https://colab.research.google.com/github/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/blob/main/materials/model-training/urban_tree_ml_workshop_2026.ipynb'],
    ['Python workflow and sample data','Available','https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/tree/main/materials/model-training'],
    ['Verified SHAP and ONNX outputs','Available','https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/tree/main/materials/model-training/reference_outputs'],
  ]],
  ['Plugin and design application', [
    ['Grasshopper encapsulation script','To be published soon',null],
    ['Example Grasshopper definition','To be published soon',null],
    ['Example plugin download','To be published soon',null],
  ]],
  ['Exercises and cases', [
    ['Participant exercise previews','Available','https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/tree/main/materials/slides/participant-exercises'],
    ['Urban-tree case previews','Available','https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/tree/main/materials/slides/cases'],
    ['Participant submission template','To be published soon',null],
  ]],
] as const;

export default function MaterialsPage() {
  return <>
    <p className="hub-eyebrow">05 / Downloads and links</p><h1 className="hub-title">Workshop materials</h1><p className="hub-lede">Every planned resource already has a stable place. Available items open directly; remaining items use the exact label “To be published soon”.</p>
    <div className="material-groups">{groups.map(([group,items], groupIndex) => <section id={`materials-${groupIndex+1}`} key={group}><div className="material-group-title"><span>{String(groupIndex+1).padStart(2,'0')}</span><h2>{group}</h2></div><div className="resource-list">{items.map(([title,status,href]) => <article key={title}><h3>{title}</h3><span className={status === 'Available' ? 'resource-status available' : 'resource-status'}>{status}</span>{href ? <a className="material-link" href={href} target="_blank" rel="noreferrer">Open <ExternalLink size={13} /></a> : <span className="material-link pending">Pending</span>}</article>)}</div></section>)}</div>
    <section className="content-section"><div className="notice-banner"><strong>Need help finding a file?</strong><p>Use the participant Q&A channel for setup and file questions. Feedback remains a separate private channel.</p><Link href="/qa">Open Q&A <ExternalLink size={14} /></Link></div></section>
  </>;
}
