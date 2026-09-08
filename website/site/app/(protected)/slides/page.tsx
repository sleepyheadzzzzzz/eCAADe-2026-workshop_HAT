import { Download, ExternalLink, FileText, Video } from 'lucide-react';

export const metadata = { title: 'PDF slides' };

const base = '/downloads/slides';
const decks = [
  ['01','Workshop overview','Introduction, tutors, schedule and expected outcomes.','Workshop_Overview.pdf'],
  ['02','Methodology','Surrogate models, feature extraction, validation, SHAP, deployment and optimization.','Methodology.pdf'],
  ['03','Urban-tree case','Tree point clouds, carbon modelling, environmental diagnosis and design application.','Urban_Tree_Case.pdf'],
  ['04','Participant exercises','Thermal comfort, construction carbon, street vitality and spatial-safety exercises.','Participant_Exercises.pdf'],
];

export default function SlidesPage() {
  const morningRecordingUrl = process.env.PARTICIPANT_MORNING_RECORDING_URL ?? '#';
  const afternoonRecordingUrl = process.env.PARTICIPANT_AFTERNOON_RECORDING_URL ?? '#';
  const afternoonRecordingPasscode = process.env.PARTICIPANT_AFTERNOON_RECORDING_PASSCODE ?? 'Available to participants';
  const miroBoardUrl = process.env.PARTICIPANT_MIRO_BOARD_URL ?? '#';
  const miroBoardPassword = process.env.PARTICIPANT_MIRO_BOARD_PASSWORD ?? 'Available to participants';

  return <>
    <p className="hub-eyebrow">03 / Downloadable teaching decks</p><h1 className="hub-title">PDF<br />slides</h1>
    <p className="hub-lede">The four workshop decks are available as PDFs, followed by the session recordings and Day 2 collaboration board.</p>
    <div className="download-grid">{decks.map(([number,title,text,file]) => <a className="download-card" href={`${base}/${file}`} target="_blank" rel="noreferrer" key={file}><FileText size={22} /><span>{number}</span><h2>{title}</h2><p>{text}</p><strong>Open or download PDF <Download size={13} /></strong></a>)}</div>
    <section className="content-section" id="session-recordings">
      <h2>Session recordings</h2>
      <div className="download-grid">
        <a className="download-card" href={morningRecordingUrl} target="_blank" rel="noreferrer"><Video size={22} /><span>05</span><h2>Morning session</h2><p>Open the morning workshop recording in Google Drive.</p><strong>Watch recording <ExternalLink size={13} /></strong></a>
        <a className="download-card" href={afternoonRecordingUrl} target="_blank" rel="noreferrer"><Video size={22} /><span>06</span><h2>Afternoon session</h2><p>Open the afternoon workshop recording in Zoom.</p><strong>Passcode: {afternoonRecordingPasscode} <ExternalLink size={13} /></strong></a>
      </div>
    </section>
    <section className="content-section" id="day-2-collaboration">
      <h2>Day 2 collaboration</h2>
      <div className="download-grid">
        <a className="download-card" href={miroBoardUrl} target="_blank" rel="noreferrer"><ExternalLink size={22} /><span>07</span><h2>Miro workshop board</h2><p>Open the shared board for the Day 2 collaborative exercises.</p><strong>Password: {miroBoardPassword} <ExternalLink size={13} /></strong></a>
      </div>
    </section>
    <section className="content-section"><div className="notice-banner"><strong>Slide update policy</strong><p>These PDFs reflect the current workshop draft. Revised files can replace them without changing this page or its navigation.</p><span>Last organized for participant release · September 2026</span></div></section>
  </>;
}
