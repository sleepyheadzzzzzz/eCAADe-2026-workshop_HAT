import { Archive, Code2, Database, Download, ExternalLink, FileCode2, PackageCheck } from 'lucide-react';

export const metadata = { title: 'Codes and samples' };

export default function CodesPage() {
  return <>
    <p className="hub-eyebrow">04 / Reproducible resources</p><h1 className="hub-title">Codes &amp;<br />samples</h1>
    <p className="hub-lede">Every workshop file below is served directly by this website. Model training and plugin encapsulation remain separated so participants can complete the Python workflow before moving into Rhino and Grasshopper.</p>

    <section className="resource-group" id="model-training">
      <div className="resource-group-heading"><span>01</span><div><h2>Model training</h2><p>One pooled XGBoost workflow with VIF, validation, four environment-only SHAP views and ONNX export.</p></div></div>
      <div className="resource-list">
        <a className="resource-item" href="/downloads/model-training/urban_tree_ml_workshop_2026.ipynb" download><FileCode2 size={19} /><div><h3>Guided notebook</h3><p>Stepwise teaching notebook with explanations before each executable cell.</p></div><strong>Download <Download size={13} /></strong></a>
        <a className="resource-item" href="https://colab.research.google.com/github/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/blob/main/materials/model-training/urban_tree_ml_workshop_2026.ipynb" target="_blank" rel="noreferrer"><ExternalLink size={19} /><div><h3>Open notebook in Colab</h3><p>Launch the same notebook directly in Google Colab.</p></div><strong>Open <ExternalLink size={13} /></strong></a>
        <a className="resource-item" href="/downloads/model-training/urban_tree_ml_workshop_2026.py" download><Code2 size={19} /><div><h3>Python workflow</h3><p>Reusable script containing preparation, modelling, SHAP and ONNX stages.</p></div><strong>Download <Download size={13} /></strong></a>
        <a className="resource-item" href="/downloads/model-training/tree_carbon_ml_teaching_sample.csv" download><Database size={19} /><div><h3>Teaching sample data</h3><p>Cleaned tree-level sample used by the notebook and verified reference run.</p></div><strong>Download <Download size={13} /></strong></a>
        <a className="resource-item" href="/downloads/model-training/Reference_Outputs.zip" download><PackageCheck size={19} /><div><h3>Verified outputs</h3><p>Metrics, VIF, SHAP figures, ONNX model, feature schema and parity examples.</p></div><strong>Download ZIP <Download size={13} /></strong></a>
        <a className="resource-item" href="/downloads/model-training/Model_Training_Complete.zip" download><Archive size={19} /><div><h3>Complete training package</h3><p>Notebook, script, sample data, requirements and reference outputs in one archive.</p></div><strong>Download ZIP <Download size={13} /></strong></a>
      </div>
    </section>

    <section className="resource-group" id="plugin-encapsulation">
      <div className="resource-group-heading"><span>02</span><div><h2>Plugin encapsulation</h2><p>Rhino 8 / Grasshopper template for wrapping a numeric tabular ONNX regression model.</p></div></div>
      <div className="resource-list">
        <a className="resource-item" href="/downloads/plugin/DF2026_Plugin_Template.zip" download><Code2 size={19} /><div><h3>Plugin source template</h3><p>Visual Studio solution, source, sample ONNX model, icon and instructions.</p></div><strong>Download ZIP <Download size={13} /></strong></a>
        <div className="resource-item pending-resource"><PackageCheck size={19} /><div><h3>Compiled example plugin</h3><p>The final workshop-ready .gha package will appear here after compatibility testing.</p></div><strong>To be published soon</strong></div>
      </div>
    </section>

    <section className="content-section"><div className="notice-banner"><strong>Important model contract</strong><p>The Grasshopper feature order and preprocessing must exactly match the exported ONNX model. Compare at least one Grasshopper result against the Python prediction before use.</p><a href="https://github.com/SHIyichao98" target="_blank" rel="noreferrer">Plugin template by Yichao Shi · @SHIyichao98 <ExternalLink size={13} /></a></div></section>
  </>;
}
