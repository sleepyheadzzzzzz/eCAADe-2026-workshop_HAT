import Image from 'next/image';
import { BookOpen, CheckCircle2, Download, ExternalLink, Laptop, MapPin, Video } from 'lucide-react';

export const metadata = { title: 'Setup guide' };

const zoomSessions = [
  ['01', '07.09 · Morning', '09:30–12:00', process.env.ZOOM_DAY1_MORNING],
  ['02', '07.09 · Afternoon', '13:30–17:00', process.env.ZOOM_DAY1_AFTERNOON],
  ['03', '08.09 · Morning', '09:30–12:00', process.env.ZOOM_DAY2_MORNING],
  ['04', '08.09 · Afternoon', '13:30–17:00', process.env.ZOOM_DAY2_AFTERNOON],
];

export default function SetupPage() {
  return <>
    <p className="hub-eyebrow">02 / Participant preparation</p>
    <h1 className="hub-title">Setup<br />guide</h1>
    <p className="hub-lede">Complete the checklist and run the readiness notebook before the workshop. Google Colab is recommended; Python 3.11 is the supported local fallback.</p>

    <div className="download-grid">
      <a className="download-card" href="/downloads/setup/Workshop_Setup_Guide_EN.md" download><BookOpen size={22} /><span>01</span><h2>Setup guide</h2><p>Rhino 8, Grasshopper, Colab, Drive, GitHub, Python fallback and optional Visual Studio preparation.</p><strong>Download guide <Download size={13} /></strong></a>
      <a className="download-card" href="/downloads/setup/Environment_Check.ipynb" download><CheckCircle2 size={22} /><span>02</span><h2>Environment check</h2><p>Imports required packages, tests file access and reports READY, READY WITH WARNINGS or NOT READY.</p><strong>Download notebook <Download size={13} /></strong></a>
      <a className="download-card" href="/downloads/setup/Local_Python_Setup.zip" download><Laptop size={22} /><span>03</span><h2>Local fallback</h2><p>Conda environment, pip requirements and JupyterLab guidance for participants who cannot use Colab.</p><strong>Download ZIP <Download size={13} /></strong></a>
    </div>

    <section className="content-section" id="zoom"><h2>Join the workshop on Zoom</h2><p>Choose the link for the correct day and session. All four meetings use the same password: <strong>{process.env.ZOOM_MEETING_PASSWORD || 'supplied by the tutors'}</strong>.</p><div className="zoom-grid">{zoomSessions.map(([number, title, time, url]) => url ? <a className="zoom-card" href={url} target="_blank" rel="noreferrer" key={number}><Video size={20} /><span>{number}</span><h3>{title}</h3><p>{time}</p><strong>Join Zoom <ExternalLink size={13} /></strong></a> : <div className="zoom-card unavailable" key={number}><Video size={20} /><span>{number}</span><h3>{title}</h3><p>{time}</p><strong>Link unavailable</strong></div>)}</div></section>

    <section className="content-section" id="venue"><h2>On-site venue</h2><div className="venue-grid"><div><MapPin size={22} /><h3>Zoom E.1 14-0.08</h3><p>Technische Hochschule Lübeck<br />Germany</p></div><figure className="content-image"><Image src="/images/venue-th-luebeck-map.png" alt="Campus map showing the workshop venue at Technische Hochschule Lübeck" width={1112} height={678} /><figcaption>Workshop room and campus access map.</figcaption></figure></div></section>

    <section className="content-section"><h2>Minimum readiness</h2><div className="learning-grid"><p><strong>Rhino</strong> Rhino 8 starts and Grasshopper opens.</p><p><strong>Notebook</strong> The environment check reaches its final report.</p><p><strong>Files</strong> GitHub and Google Drive are accessible.</p><p><strong>Fallback</strong> Local Python 3.11 is needed only if Colab is unavailable.</p></div></section>
  </>;
}
