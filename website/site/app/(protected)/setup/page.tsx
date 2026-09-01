import { BookOpen, CheckCircle2, Download, ExternalLink, Laptop, Video } from 'lucide-react';

export const metadata = { title: 'Setup guide' };

export default function SetupPage() {
  return <>
    <p className="hub-eyebrow">02 / Participant preparation</p>
    <h1 className="hub-title">Setup<br />guide</h1>
    <p className="hub-lede">Complete the checklist and run the readiness notebook before the workshop. Google Colab is recommended; Python 3.11 is the supported local fallback.</p>

    <div className="download-grid">
      <a className="download-card" href="/downloads/setup/Workshop_Setup_Guide_EN.md" download><BookOpen size={22} /><span>01</span><h2>Setup guide</h2><p>Rhino 8, Grasshopper, Colab, Drive, GitHub, Python fallback and optional Visual Studio preparation.</p><strong>Download guide <Download size={13} /></strong></a>
      <a className="download-card" href="/downloads/setup/Environment_Check.ipynb" download><CheckCircle2 size={22} /><span>02</span><h2>Environment check</h2><p>Imports required packages, tests file access and reports READY, READY WITH WARNINGS or NOT READY.</p><strong>Download notebook <Download size={13} /></strong></a>
      <a className="download-card" href="/downloads/setup/Local_Python_Setup.zip" download><Laptop size={22} /><span>03</span><h2>Local fallback</h2><p>Conda environment, pip requirements and JupyterLab guidance for participants who cannot use Colab.</p><strong>Download ZIP <Download size={13} /></strong></a>
      <a className="download-card placeholder-card" href="https://zoom.us/test" target="_blank" rel="noreferrer"><Video size={22} /><span>04</span><h2>Test Zoom</h2><p>Use Zoom&apos;s official test room now. The workshop meeting link will replace this position before the event.</p><strong>Open Zoom test <ExternalLink size={13} /></strong></a>
    </div>

    <section className="content-section"><h2>Minimum readiness</h2><div className="learning-grid"><p><strong>Rhino</strong> Rhino 8 starts and Grasshopper opens.</p><p><strong>Notebook</strong> The environment check reaches its final report.</p><p><strong>Files</strong> GitHub and Google Drive are accessible.</p><p><strong>Fallback</strong> Local Python 3.11 is needed only if Colab is unavailable.</p></div><div className="notice-banner contributor-notice"><strong>Resource author</strong><p>The setup guide, environment check and local fallback files were authored by Yichao Shi and reused from DF_2026 under the MIT License.</p><a href="https://github.com/SHIyichao98" target="_blank" rel="noreferrer">View @SHIyichao98 on GitHub <ExternalLink size={13} /></a></div></section>
  </>;
}
