import Image from 'next/image';
import { Archive, Code2, Database, Download, ExternalLink, FileCode2, Map, PackageCheck, Search } from 'lucide-react';

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
        <div className="resource-item"><PackageCheck size={19} /><div><h3>Betula plugin for Rhino 8</h3><p>Open Rhino&apos;s Package Manager, search for <strong>Betula</strong>, select the current version and install it.</p></div><strong><Search size={13} /> Search Betula</strong></div>
      </div>
      <figure className="content-image plugin-visual"><Image src="/images/betula-package-manager.png" alt="Betula plugin listed in the Rhino Package Manager" width={1468} height={1024} /><figcaption>Rhino Package Manager · search “Betula” and choose Install.</figcaption></figure>
    </section>

    <section className="resource-group" id="plugin-demos">
      <div className="resource-group-heading"><span>03</span><div><h2>Workshop plugin demos</h2><p>Download the prepared examples, then keep each package together when extracting it so its linked models, rasters and project files remain available.</p></div></div>
      <div className="resource-list">
        <a className="resource-item" href="https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/releases/download/workshop-materials-2026/Example.zip" target="_blank" rel="noreferrer"><Archive size={19} /><div><h3>Betula Rhino example</h3><p>Rhino and Grasshopper example files with the ONNX diagnosis model, environmental rasters, weather data and embedded assets.</p></div><strong>Download · 408 MB <Download size={13} /></strong></a>
        <a className="resource-item" href="https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/releases/download/workshop-materials-2026/TreeSuit_XAI_City_Demo_2.1.2.zip" target="_blank" rel="noreferrer"><Map size={19} /><div><h3>TreeSuit XAI QGIS city demo · v2.1.2</h3><p>QGIS project, plugin package, example city layers, diagnosis rasters, planting outputs and participant guidance.</p></div><strong>Download · 6.8 MB <Download size={13} /></strong></a>
      </div>
    </section>

    <section className="content-section"><div className="notice-banner"><strong>Important model contract</strong><p>The Grasshopper feature order and preprocessing must exactly match the exported ONNX model. Compare at least one Grasshopper result against the Python prediction before use.</p></div></section>
  </>;
}
