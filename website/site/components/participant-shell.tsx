import Link from 'next/link';
import { BookOpen, CircleHelp, FlaskConical, FolderOpen, LayoutGrid, MessageSquare, Route } from 'lucide-react';
import { LogoutButton } from './logout-button';

const links = [
  ['/workshop', 'Overview', LayoutGrid],
  ['/curriculum', 'Curriculum', BookOpen],
  ['/methodology', 'Methodology', Route],
  ['/cases', 'Cases', FlaskConical],
  ['/materials', 'Materials', FolderOpen],
  ['/qa', 'Q&A channel', CircleHelp],
  ['/feedback', 'Feedback channel', MessageSquare],
] as const;

export function ParticipantShell({ children }: { children: React.ReactNode }) {
  return <div className="hub-shell">
    <header className="hub-header"><Link href="/workshop" className="site-mark inverse"><span>HAT</span><strong>Participant hub</strong></Link><LogoutButton /></header>
    <nav className="hub-mobile-links" aria-label="Workshop pages">{links.map(([href,label]) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <div className="hub-layout">
      <aside className="hub-sidebar"><p>Workshop sections</p><nav>{links.map(([href,label,Icon], index) => <Link href={href} key={href}><span>{String(index + 1).padStart(2,'0')}</span><Icon size={16} />{label}</Link>)}</nav><div className="hub-note"><strong>Living material</strong><span>Unreleased items are marked “To be published soon”.</span></div></aside>
      <main className="hub-main"><div className="hub-main-inner">{children}</div></main>
    </div>
  </div>;
}
