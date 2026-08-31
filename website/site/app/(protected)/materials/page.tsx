import Link from 'next/link';
import { Box, CodeXml, ExternalLink, FileDown, FileText, Presentation, Wrench } from 'lucide-react';

export const metadata = { title: 'Workshop materials' };

const materials = [
  ['Workshop overview slides', 'Introduction, structure and expected outcomes.', 'Available in source pack', Presentation, null],
  ['Methodology slides', 'Data preparation, validation, SHAP and deployment.', 'Available in source pack', Presentation, null],
  ['Urban-tree case slides', 'Worked example from environmental data to diagnosis.', 'Available in source pack', Presentation, null],
  ['Participant exercise slides', 'Stepwise exercise prompts and expected outputs.', 'Available in source pack', FileText, null],
  ['Colab training notebook', 'Overall model with VIF, tuning, evaluation, SHAP and ONNX export.', 'Open repository', CodeXml, 'https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT'],
  ['Sample dataset', 'Clean teaching dataset for the overall-model exercise.', 'Open repository', FileDown, 'https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT'],
  ['Environment setup tutorial', 'Rhino, Grasshopper, Colab and local Python checklist.', 'To be published soon', Wrench, null],
  ['Plugin encapsulation script', 'C# / Grasshopper wrapper with model and metadata contract.', 'To be published soon', Box, null],
  ['Example Grasshopper plugin', 'Ready-to-open example definition and ONNX package.', 'To be published soon', Box, null],
] as const;

export default function MaterialsPage() {
  return (
    <>
      <p className="hub-eyebrow">Downloads and links</p><h1 className="hub-title">Workshop materials</h1>
      <p className="hub-lede">This is the single index for participant files. Available resources link to the project repository; unfinished resources keep their final position so the structure will not change later.</p>
      <div className="materials-grid">
        {materials.map(([title, text, status, Icon, href]) => (
          <article className="material-card" key={title}>
            <div className="material-icon"><Icon size={20} /></div><div><h3>{title}</h3><p>{text}</p><span className={status.includes('soon') ? 'status-pill' : 'status-pill live'}>{status}</span></div>
            {href ? <a className="material-link" href={href} target="_blank" rel="noreferrer">Open <ExternalLink size={13} /></a> : <span className="material-link muted-link">Pending</span>}
          </article>
        ))}
      </div>
      <section className="content-section"><div className="notice-banner"><strong>File-release note</strong><p>The current GitHub repository is public. Restricted workshop PDFs and binaries are therefore not copied into it yet. Before participant release, keep restricted downloads behind the site or change repository visibility.</p><Link href="/qa">Ask about setup <ExternalLink size={15} /></Link></div></section>
    </>
  );
}
