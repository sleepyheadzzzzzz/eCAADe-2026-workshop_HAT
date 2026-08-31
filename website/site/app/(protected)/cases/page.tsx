import Image from 'next/image';

export const metadata = { title: 'Teaching cases' };

const cases = [
  ['Primary case','Urban-tree carbon growth','Train one pooled model, isolate environmental associations, export to ONNX and use local deviation as a design signal.','/slides/cases/case-8.png'],
  ['Transfer case 01','Outdoor thermal comfort','Approximate simulation outputs and inspect how morphology and microclimate shape thermal stress.','/slides/participant/participant-7.png'],
  ['Transfer case 02','Construction carbon','Compare material and assembly choices using interpretable early-stage prediction.','/slides/participant/participant-11.png'],
  ['Transfer case 03','Street vitality','Connect spatial, environmental and activity indicators while checking data and model limits.','/slides/participant/participant-17.png'],
  ['Transfer case 04','Urban-space safety','Distinguish predictive association, spatial evidence and human design judgement.','/slides/participant/participant-24.png'],
];

export default function CasesPage() {
  return <>
    <p className="hub-eyebrow">04 / Examples and transfer</p><h1 className="hub-title">Teaching cases</h1><p className="hub-lede">The urban-tree exercise is complete and reproducible. Four related case families demonstrate transfer without assuming that one predictor set or evaluation design fits every question.</p>
    <div className="case-grid">{cases.map(([label,title,text,image]) => <article className="case-card" key={title}><span>{label}</span><Image src={image} alt={`${title} workshop slide`} width={1600} height={900} /><h3>{title}</h3><p>{text}</p></article>)}</div>
    <section className="content-section"><h2>Urban-tree workflow</h2><div className="image-pair"><figure className="content-image"><Image src="/slides/cases/case-7.png" alt="Tree point-cloud and model workflow" width={1600} height={900} /><figcaption>From tree observations to a data-driven model.</figcaption></figure><figure className="content-image"><Image src="/slides/cases/case-10.png" alt="Urban-tree environmental variables" width={1600} height={900} /><figcaption>Environmental variables used by the case.</figcaption></figure></div></section>
  </>;
}
