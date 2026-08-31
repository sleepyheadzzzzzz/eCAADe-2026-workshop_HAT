import Image from 'next/image';

export const metadata = { title: 'Methodology' };

const steps = [
  ['01', 'Prepare', 'Clean, encode and audit'],
  ['02', 'Split', '70 / 15 / 15 without leakage'],
  ['03', 'Train', 'Compare candidate models'],
  ['04', 'Explain', 'Global, local and spatial SHAP'],
  ['05', 'Deploy', 'ONNX + Grasshopper'],
];

export default function MethodologyPage() {
  return (
    <>
      <p className="hub-eyebrow">Reproducible workflow</p><h1 className="hub-title">Methodology</h1>
      <p className="hub-lede">The workshop treats model development, explanation and deployment as one connected system. Accuracy matters, but so do evaluation discipline, interpretability and a clear input–output contract.</p>
      <div className="method-steps">{steps.map(([number, title, text]) => <div className="method-step" key={number}><span>{number}</span><strong>{title}</strong><small>{text}</small></div>)}</div>

      <section className="content-section"><h2>1. Prepare and audit</h2><p>Inspect missing values, distributions and outliers. Derive only defensible features, preserve repeated observations from the same object, and use VIF as a diagnostic rather than an automatic deletion rule.</p></section>
      <section className="content-section"><h2>2. Train, validate and lock the test</h2><p>Training fits parameters. Validation supports model and hyperparameter choices. The locked test is opened once for an unbiased final estimate. Where observations are spatially related, the split must represent the intended deployment distance and context.</p></section>
      <section className="content-section"><h2>3. Explain environmental contributions</h2><p>Beeswarm plots summarize importance and direction across the evaluation set. Dependence plots reveal response shape and approximate interactions. Waterfalls explain one prediction. Spatial SHAP maps locate where particular contributions are positive or negative.</p>
        <figure className="content-image"><Image src="/images/shap-method.png" alt="Workshop slide illustrating the SHAP interpretation stage" width={960} height={540} /><figcaption>Workshop methodology slide · the figure will be replaced with the final workshop graphic before release.</figcaption></figure>
      </section>
      <section className="content-section"><h2>4. Encapsulate and reconnect</h2><p>The selected model is exported with preprocessing metadata, input names, units, allowed ranges and output transformation. Grasshopper then becomes an interface for scenario diagnosis—not a black-box prediction button.</p></section>
    </>
  );
}
