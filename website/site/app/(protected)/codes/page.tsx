import { Archive, Code2, Database, Download, ExternalLink, FileCode2, PackageCheck } from 'lucide-react';

export const metadata = { title: 'Codes and samples' };

const repo = 'https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT';

export default function CodesPage() {
  return <>
    <p className="hub-eyebrow">04 / Reproducible resources</p><h1 className="hub-title">Codes &amp;<br />samples</h1>
    <p className="hub-lede">Model training and plugin encapsulation are separated so participants can complete the Python workflow before moving into Rhino and Grasshopper.</p>

    <section className="resource-group" id="model-training">
      <div className="resource-group-heading"><span>01</span><div><h2>Model training</h2><p>One pooled XGBoost workflow with VIF, validation, four environment-only SHAP views and ONNX export.</p></div></div>
      <div className="resource-list">
        <article><FileCode2 size={19} /><div><h3>Guided Colab notebook</h3><p>Stepwise teaching notebook with explanations before each executable cell.</p></div><a className="material-link" href="https://colab.research.google.com/github/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/blob/main/materials/model-training/urban_tree_ml_workshop_2026.ipynb" target="_blank" rel="noreferrer">Open <ExternalLink size={13} /></a></article>
        <article><Code2 size={19} /><div><h3>Python workflow</h3><p>Reusable script containing the same preparation, modelling, SHAP and ONNX stages.</p></div><a className="material-link" href={`${repo}/blob/main/materials/model-training/urban_tree_ml_workshop_2026.py`} target="_blank" rel="noreferrer">Open <ExternalLink size={13} /></a></article>
        <article><Database size={19} /><div><h3>Teaching sample data</h3><p>Cleaned tree-level sample used by the notebook and verified reference run.</p></div><a className="material-link" href={`${repo}/blob/main/materials/model-training/data/tree_carbon_ml_teaching_sample.csv`} target="_blank" rel="noreferrer">Open <Download size={13} /></a></article>
        <article><PackageCheck size={19} /><div><h3>Verified outputs</h3><p>Metrics, VIF, SHAP figures, ONNX model, feature schema and parity examples.</p></div><a className="material-link" href={`${repo}/tree/main/materials/model-training/reference_outputs`} target="_blank" rel="noreferrer">Browse <ExternalLink size={13} /></a></article>
      </div>
    </section>

    <section className="resource-group" id="plugin-encapsulation">
      <div className="resource-group-heading"><span>02</span><div><h2>Plugin encapsulation</h2><p>Rhino 8 / Grasshopper template for wrapping a numeric tabular ONNX regression model.</p></div></div>
      <div className="resource-list">
        <article><Code2 size={19} /><div><h3>Plugin source template</h3><p>Edit PluginConfig.cs, replace model.onnx and provide a component icon.</p></div><a className="material-link" href={`${repo}/tree/main/materials/plugin-encapsulation/DF2026_Plugin_Template`} target="_blank" rel="noreferrer">Browse <ExternalLink size={13} /></a></article>
        <article><Archive size={19} /><div><h3>Download template ZIP</h3><p>Source, Visual Studio solution, sample ONNX model, icon and complete instructions.</p></div><a className="material-link" href="https://raw.githubusercontent.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/main/materials/plugin-encapsulation/DF2026_Plugin_Template.zip" target="_blank" rel="noreferrer">Download <Download size={13} /></a></article>
        <article><PackageCheck size={19} /><div><h3>Compiled example plugin</h3><p>A reserved release link for the final workshop-ready .gha package.</p></div><a className="material-link placeholder-link" href={`${repo}/releases`} target="_blank" rel="noreferrer">Placeholder <ExternalLink size={13} /></a></article>
      </div>
    </section>

    <section className="content-section"><div className="notice-banner"><strong>Important model contract</strong><p>The Grasshopper feature order and preprocessing must exactly match the exported ONNX model. Compare at least one Grasshopper result against the Python prediction before use.</p><span>Template reused under the MIT License from SHIyichao98/DF_2026</span></div></section>
  </>;
}
