import { BookOpen, CheckCircle2, Download, ExternalLink, Laptop, Video } from 'lucide-react';

export const metadata = { title: 'Setup guide' };

const repository = 'https://github.com/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT';

export default function SetupPage() {
  return <>
    <p className="hub-eyebrow">02 / Participant preparation</p>
    <h1 className="hub-title">Setup<br />guide</h1>
    <p className="hub-lede">Complete the checklist and run the readiness notebook before the workshop. Google Colab is recommended; Python 3.11 is the supported local fallback.</p>

    <div className="download-grid">
      <a className="download-card" href={`${repository}/blob/main/materials/setup/Workshop_Setup_Guide_EN.md`} target="_blank" rel="noreferrer"><BookOpen size={22} /><span>01</span><h2>Read the setup guide</h2><p>Rhino 8, Grasshopper, Colab, Drive, GitHub, Python fallback and optional Visual Studio preparation.</p><strong>Open guide <ExternalLink size={13} /></strong></a>
      <a className="download-card" href="https://colab.research.google.com/github/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/blob/main/materials/setup/Environment_Check.ipynb" target="_blank" rel="noreferrer"><CheckCircle2 size={22} /><span>02</span><h2>Run environment check</h2><p>Imports required packages, tests file access and reports READY, READY WITH WARNINGS or NOT READY.</p><strong>Open in Colab <ExternalLink size={13} /></strong></a>
      <a className="download-card" href={`${repository}/tree/main/materials/setup/environment`} target="_blank" rel="noreferrer"><Laptop size={22} /><span>03</span><h2>Local fallback</h2><p>Conda environment, pip requirements and JupyterLab guidance for participants who cannot use Colab.</p><strong>Open files <Download size={13} /></strong></a>
      <a className="download-card placeholder-card" href="https://zoom.us/" target="_blank" rel="noreferrer"><Video size={22} /><span>04</span><h2>Online workshop room</h2><p>This safe placeholder reserves the Zoom position. It will be replaced by the final meeting URL.</p><strong>Placeholder link <ExternalLink size={13} /></strong></a>
    </div>

    <section className="content-section"><h2>Minimum readiness</h2><div className="learning-grid"><p><strong>Rhino</strong> Rhino 8 starts and Grasshopper opens.</p><p><strong>Notebook</strong> The environment check reaches its final report.</p><p><strong>Files</strong> GitHub and Google Drive are accessible.</p><p><strong>Fallback</strong> Local Python 3.11 is needed only if Colab is unavailable.</p></div></section>
  </>;
}
