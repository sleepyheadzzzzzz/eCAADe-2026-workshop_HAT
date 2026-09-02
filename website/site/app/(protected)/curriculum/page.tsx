import Image from 'next/image';

export const metadata = { title: 'Curriculum' };

const modules = [
  ['01','Surrogate Model Introduction','Frame what a surrogate model approximates and where it can mislead.','Shared problem statement'],
  ['02','Feature Extraction','Translate environmental observations into model-ready predictors.','Clean analysis table'],
  ['03','Model Training','Use leakage-safe partitions and compare candidate settings.','Locked-test evaluation'],
  ['04','Model Interpretation','Read beeswarm, dependence, waterfall and spatial SHAP.','Four-part SHAP set'],
  ['05','Module Encapsulation','Export the selected model and its preprocessing contract.','Portable ONNX package'],
  ['06','Design Support','Reconnect predictions, deviations and reliability to spatial decisions.','Diagnosis component'],
  ['07','Agentic Optimization','Place the diagnostic model inside a human-guided multi-objective search.','Optimization concept'],
];

export default function CurriculumPage() {
  return <>
    <p className="hub-eyebrow">02 / Learning path</p><h1 className="hub-title">Curriculum</h1><p className="hub-lede">The sequence moves from evidence to interpretation and only then to design application. Every module leaves an artifact used by the next.</p>
    <div className="curriculum-list">{modules.map(([number,title,text,output]) => <article className="curriculum-item" key={number}><span className="curriculum-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="curriculum-output">OUTPUT<br />{output}</span></article>)}</div>
    <section className="content-section"><h2>Curriculum map</h2><figure className="content-image"><Image src="/slides/introduction/overview-10.png" alt="Seven-step workshop methodology" width={1600} height={900} /><figcaption>Seven-step workshop structure rendered from the updated overview deck.</figcaption></figure></section>
    <section className="content-section"><h2>Learning outcomes</h2><div className="learning-grid"><p><strong>Understand</strong> surrogate-model scope and limitations.</p><p><strong>Evaluate</strong> generalization without leakage.</p><p><strong>Explain</strong> global, local and spatial associations.</p><p><strong>Deploy</strong> an inspectable model contract.</p></div></section>
  </>;
}
