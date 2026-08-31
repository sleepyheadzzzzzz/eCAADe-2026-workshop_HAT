import Image from 'next/image';

export const metadata = { title: 'Teaching cases' };

const cases = [
  ['Primary case', 'Urban-tree carbon growth', 'Train an overall model, isolate environmental associations, export to ONNX and use local deviation as a design signal.'],
  ['Transfer case 01', 'Outdoor thermal comfort', 'Approximate simulation outputs and inspect how morphology and microclimate shape the result.'],
  ['Transfer case 02', 'Construction carbon', 'Use interpretable prediction to compare material and assembly choices early in design.'],
  ['Transfer case 03', 'Street vitality', 'Combine spatial, environmental and activity indicators while checking model limitations.'],
  ['Transfer case 04', 'Urban-space safety', 'Explore the distinction between predictive association, spatial pattern and design judgement.'],
];

export default function CasesPage() {
  return (
    <>
      <p className="hub-eyebrow">Examples and transfer</p><h1 className="hub-title">Teaching cases</h1>
      <p className="hub-lede">One complete urban-tree exercise anchors the workshop. Four related case families show how the same logic can be adapted without pretending that the same predictors or evaluation design fit every problem.</p>
      <div className="case-grid">{cases.map(([label, title, text]) => <article className="case-card" key={title}><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <figure className="content-image"><Image src="/images/case-study.png" alt="Workshop case-study slide showing the urban tree modelling workflow" width={960} height={540} /><figcaption>Current case-study slide extract. Final imagery and labels remain open for revision.</figcaption></figure>
    </>
  );
}
