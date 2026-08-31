import Link from 'next/link';
import {
  ArrowRight,
  BookOpenText,
  CircleHelp,
  Clock3,
  FolderDown,
  Laptop,
  MapPin,
  MessageSquareText,
  UsersRound,
} from 'lucide-react';

export const metadata = { title: 'Workshop overview' };

const cards = [
  ['Curriculum', 'Seven connected modules from framing to optional agentic optimization.', '/curriculum', BookOpenText],
  ['Workshop materials', 'Slides and starter code now; tutorials and plugin downloads as they are released.', '/materials', FolderDown],
  ['Q&A channel', 'Ask a visible technical or conceptual question and learn from the group.', '/qa', CircleHelp],
  ['Feedback channel', 'Send private or anonymous feedback to the tutor team.', '/feedback', MessageSquareText],
] as const;

export default function WorkshopPage() {
  return (
    <>
      <p className="hub-eyebrow">Welcome · Participant hub</p>
      <h1 className="hub-title">One workshop.<br />One complete design–AI loop.</h1>
      <p className="hub-lede">Use this hub before, during and after the workshop. It organizes the schedule, methodology, teaching cases, files and two separate communication channels.</p>

      <div className="hub-card-grid">
        {cards.map(([title, text, href, Icon]) => (
          <Link className="hub-card" href={href} key={title}>
            <div className="hub-card-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><ArrowRight className="hub-card-arrow" size={18} />
          </Link>
        ))}
      </div>

      <section className="content-section">
        <h2>At a glance</h2>
        <div className="fact-grid">
          <div><Clock3 size={19} /><span>7–8 September 2026<br /><strong>09:30–17:00</strong></span></div>
          <div><MapPin size={19} /><span>Hybrid delivery<br /><strong>Room + Zoom</strong></span></div>
          <div><UsersRound size={19} /><span>Collaborative cohort<br /><strong>15–20 participants</strong></span></div>
          <div><Laptop size={19} /><span>Bring your laptop<br /><strong>Rhino + Colab/Python</strong></span></div>
        </div>
      </section>

      <section className="content-section">
        <div className="notice-banner"><strong>Before you arrive</strong><p>Confirm that Rhino/Grasshopper runs on your laptop and that you can open Google Colab or a local Jupyter environment. A step-by-step setup tutorial will be published here.</p><Link href="/materials">Open preparation checklist <ArrowRight size={16} /></Link></div>
      </section>
    </>
  );
}
