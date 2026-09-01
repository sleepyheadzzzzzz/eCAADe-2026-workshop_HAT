import Link from 'next/link';
import { BookCheck, Code2, Files, LayoutGrid, MessagesSquare } from 'lucide-react';
import { LogoutButton } from './logout-button';

const links = [
  ['/workshop', 'Overview', LayoutGrid],
  ['/setup', 'Setup guide', BookCheck],
  ['/slides', 'Slides', Files],
  ['/codes', 'Codes & samples', Code2],
  ['/discussion', 'Discussion', MessagesSquare],
] as const;

export function ParticipantShell({ children }: { children: React.ReactNode }) {
  return <div className="hub-shell">
    <header className="hub-header"><Link href="/workshop" className="site-mark inverse"><span>HAT</span><strong>Participant hub</strong></Link><LogoutButton /></header>
    <nav className="hub-mobile-links" aria-label="Workshop pages">{links.map(([href,label]) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <div className="hub-layout">
      <aside className="hub-sidebar"><p>Participant channel</p><nav>{links.map(([href,label,Icon], index) => <Link href={href} key={href}><span>{String(index + 1).padStart(2,'0')}</span><Icon size={16} />{label}</Link>)}</nav><div className="hub-note"><strong>Start with setup</strong><span>Run the environment check before opening the exercises.</span><a href="https://github.com/SHIyichao98" target="_blank" rel="noreferrer">Setup + plugin resources: Yichao Shi ↗</a></div></aside>
      <main className="hub-main"><div className="hub-main-inner">{children}</div></main>
    </div>
  </div>;
}
