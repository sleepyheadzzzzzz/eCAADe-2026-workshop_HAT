export const metadata = { title: 'Curriculum' };

const modules = [
  ['01', 'Surrogate model introduction', 'Frame what a surrogate model approximates, where it supports design and where it can mislead.', 'Shared problem statement'],
  ['02', 'Feature extraction and data preparation', 'Translate environmental observations into model-ready predictors; handle missingness, scaling, collinearity and grouped records.', 'Clean analysis table'],
  ['03', 'Model training, validation and test', 'Use a 70/15/15 workflow, compare candidate algorithms and preserve grouped or spatial structure in evaluation.', 'Locked-test model comparison'],
  ['04', 'Explainable environmental patterns', 'Read beeswarm, dependence, waterfall and spatial SHAP views as fitted associations—not causal effects.', 'Four-part SHAP evidence set'],
  ['05', 'Model encapsulation', 'Export the selected model and its preprocessing contract to ONNX for use outside Python.', 'Portable ONNX package'],
  ['06', 'Design support and diagnosis', 'Reconnect predictions, local deviations and reliability information to Rhino/Grasshopper decisions.', 'Interactive diagnosis component'],
  ['07', 'Agentic optimization · optional', 'Use the diagnostic model inside a multi-objective or agent-assisted design search while keeping human judgement in control.', 'Optimization concept'],
];

export default function CurriculumPage() {
  return (
    <>
      <p className="hub-eyebrow">Learning path</p><h1 className="hub-title">Curriculum</h1>
      <p className="hub-lede">The sequence deliberately moves from evidence to interpretation and only then to design application. Each module leaves a concrete intermediate artifact.</p>
      <div className="curriculum-list">
        {modules.map(([number, title, text, output]) => (
          <article className="curriculum-item" key={number}><span className="curriculum-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="curriculum-output">OUTPUT<br />{output}</span></article>
        ))}
      </div>
      <section className="content-section"><h2>Learning outcomes</h2><div className="learning-grid"><p><strong>Understand</strong> how environmental surrogate models approximate complex simulations or observed outcomes.</p><p><strong>Evaluate</strong> generalization using clean validation and test partitions.</p><p><strong>Explain</strong> the model globally, locally and spatially using SHAP.</p><p><strong>Deploy</strong> a portable model as an inspectable design-support component.</p></div></section>
    </>
  );
}
