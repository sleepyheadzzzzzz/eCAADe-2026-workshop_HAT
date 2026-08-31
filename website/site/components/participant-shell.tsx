import Link from 'next/link';
import {
  BookOpenText,
  CalendarRange,
  CircleHelp,
  FlaskConical,
  FolderDown,
  LayoutDashboard,
  MessageSquareText,
  Route,
} from 'lucide-react';
import { LogoutButton } from './logout-button';

const links = [
  ['/workshop', 'Overview', LayoutDashboard],
  ['/curriculum', 'Curriculum', CalendarRange],
  ['/methodology', 'Methodology', Route],
  ['/cases', 'Cases', FlaskConical],
  ['/materials', 'Materials', FolderDown],
  ['/qa', 'Q&A channel', CircleHelp],
  ['/feedback', 'Feedback channel', MessageSquareText],
] as const;

export function ParticipantShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="hub-shell">
      <header className="hub-header">
        <Link href="/workshop" className="wordmark"><span className="wordmark-mark">HAT</span><span>Participant hub</span></Link>
        <div className="hub-header-actions"><span className="hub-mobile-nav">Workshop menu ↓</span><LogoutButton /></div>
      </header>
      <div className="hub-mobile-links">
        {links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}
      </div>
      <div className="hub-layout">
        <aside className="hub-sidebar">
          <p>Workshop navigation</p>
          <nav className="hub-nav">
            {links.map(([href, label, Icon]) => <Link href={href} key={href}><Icon size={17} />{label}</Link>)}
          </nav>
          <div className="hub-note"><BookOpenText size={16} /><strong>Living draft</strong><br />Materials marked “soon” will be added before the workshop.</div>
        </aside>
        <main className="hub-main"><div className="hub-main-inner">{children}</div></main>
      </div>
    </div>
  );
}
