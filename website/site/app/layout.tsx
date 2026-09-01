import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Human–AI Teaming · eCAADe 2026 Workshop',
    template: '%s · Human–AI Teaming',
  },
  description:
    'A two-day workshop moving from predictive environmental models to explainable, design-coupled intelligence.',
  openGraph: {
    title: 'Human–AI Teaming · eCAADe 2026 Workshop',
    description:
      'Build, explain, package and apply an environmental surrogate model in a design workflow.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
