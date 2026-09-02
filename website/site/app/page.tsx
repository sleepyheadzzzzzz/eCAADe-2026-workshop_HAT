import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { AccessForm } from '@/components/access-form';

const nav = [
  ['#introduction', 'Introduction'],
  ['#team', 'Team'],
  ['#curriculum', 'Curriculum'],
  ['#schedule', 'Schedule'],
  ['#methodology', 'Methodology'],
  ['#cases', 'Cases'],
  ['#outcomes', 'Outcomes'],
  ['#access', 'Participant access'],
];

const modules = [
  ['01', 'Surrogate Model Introduction'],
  ['02', 'Feature Extraction'],
  ['03', 'Model Training'],
  ['04', 'Model Interpretation'],
  ['05', 'Module Encapsulation'],
  ['06', 'Design Support'],
  ['07', 'Agentic Optimization'],
];

const team = [
  ['Prof. Dr. Pia Fricker', 'Professor · Computational Design', 'Aalto University', 'https://fricker-arch-aalto.fi/'],
  ['Chaowen Yao', 'PhD Candidate · Computational Landscape and Urbanism', 'Aalto University', 'https://yaochaowen.com/'],
  ['Zubin Tan', 'University Teacher · Computational Design', 'Aalto University', ''],
  ['Yichao Shi', 'PhD Candidate · Shape Grammars, Computational Design', 'Georgia Institute of Technology', ''],
  ['Chenhao Zhu', 'PhD Candidate · Urban Mobility, Built Environment', 'Massachusetts Institute of Technology', ''],
];

export default function Home() {
  return (
    <main className="landing-shell">
      <aside className="landing-sidebar">
        <Link className="site-mark" href="/"><span>HAT</span><strong>eCAADe 2026</strong></Link>
        <p>Human–AI Teaming workshop</p>
        <nav aria-label="Page sections">
          {nav.map(([href, label], index) => <a href={href} key={href}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}
        </nav>
        <Link className="sidebar-qa" href="/qa">Public Q&amp;A <ArrowRight size={15} /></Link>
        <Link className="sidebar-access" href="/access">Enter hub <ArrowRight size={15} /></Link>
      </aside>

      <div className="landing-content">
        <header className="mobile-header"><Link className="site-mark" href="/"><span>HAT</span><strong>eCAADe 2026</strong></Link><div><Link href="/qa">Q&amp;A</Link><Link href="/access">Access</Link></div></header>

        <section className="landing-hero" id="introduction">
          <div className="hero-text">
            <p className="mono-label">7–8 September 2026 · Hybrid workshop</p>
            <h1>Human–AI<br />Teaming</h1>
            <p className="display-subtitle">From predictive environmental models to explainable, design-coupled intelligence.</p>
            <div className="hero-links"><Link className="solid-link" href="/access">Participant access <ArrowRight size={16} /></Link><a className="line-link" href="#curriculum">View curriculum</a></div>
          </div>
          <figure className="hero-slide"><Image src="/slides/introduction/overview-1.png" alt="Human–AI Teaming workshop title slide" width={1600} height={900} priority /><figcaption>Workshop overview deck · title</figcaption></figure>
        </section>

        <section className="content-block statement-block">
          <p className="section-number">01 / Introduction</p>
          <div><h2>Prediction is only the beginning.</h2><p>The workshop follows one complete design–AI loop: extract environmental evidence, train and test a surrogate model, explain how the model uses the environment, package it for design software and evaluate new spatial scenarios.</p><p>The urban-tree carbon-growth case anchors the exercise. Thermal comfort, construction carbon, street vitality and spatial safety show how the same reasoning can transfer across design problems.</p></div>
        </section>

        <section className="content-block" id="team">
          <p className="section-number">02 / Team</p>
          <div><h2>Workshop team</h2><div className="team-grid">{team.map(([name, role, institution, href]) => <article key={name}><span>{institution}</span><h3>{href ? <a href={href} target="_blank" rel="noreferrer">{name}</a> : name}</h3><p>{role}</p></article>)}</div><figure className="slide-frame"><Image src="/slides/introduction/overview-2.png" alt="Workshop team slide" width={1600} height={900} /><figcaption>Workshop team · updated overview deck</figcaption></figure></div>
        </section>

        <section className="content-block" id="curriculum">
          <p className="section-number">03 / Curriculum</p>
          <div><h2>Seven connected modules</h2><div className="module-list">{modules.map(([number, title]) => <article key={number}><span>{number}</span><h3>{title}</h3><ArrowRight size={17} /></article>)}</div></div>
        </section>

        <section className="content-block" id="schedule">
          <p className="section-number">04 / Schedule</p>
          <div><h2>Two days, one continuous workflow</h2><div className="schedule-grid"><article><span>Day 01 · 07.09</span><h3>Understand and reproduce</h3><p>Introduction, methodology lecture, case study and guided case workshop.</p></article><article><span>Day 02 · 08.09</span><h3>Adapt and exchange</h3><p>Discussion, self-directed workshop, tutor Q&amp;A, peer sharing and feedback.</p></article></div><figure className="slide-frame"><Image src="/slides/introduction/overview-9.png" alt="Workshop schedule slide" width={1600} height={900} /><figcaption>7–8 September 2026 · 09:30–12:00 and 13:30–17:00</figcaption></figure></div>
        </section>

        <section className="content-block" id="methodology">
          <p className="section-number">05 / Methodology</p>
          <div><h2>Evidence → model → explanation → design</h2><p className="section-lede">Participants work with clean splits, editable XGBoost settings, VIF diagnostics and four environmental SHAP views before exporting a tested ONNX model.</p><div className="image-pair"><figure className="slide-frame"><Image src="/slides/introduction/overview-5.png" alt="Workflow from sensor and simulation data to design" width={1600} height={900} /><figcaption>Overall workflow</figcaption></figure><figure className="slide-frame"><Image src="/slides/introduction/overview-10.png" alt="Seven methodology steps" width={1600} height={900} /><figcaption>Seven methodology steps</figcaption></figure></div><Link className="text-link" href="/access">Open the protected methodology pages <ArrowRight size={15} /></Link></div>
        </section>

        <section className="content-block" id="cases">
          <p className="section-number">06 / Cases</p>
          <div><h2>One complete case, four transfer directions</h2><div className="case-strip"><span>Urban trees</span><span>Thermal comfort</span><span>Construction carbon</span><span>Street vitality</span><span>Spatial safety</span></div><div className="image-pair"><figure className="slide-frame"><Image src="/slides/introduction/overview-12.png" alt="Urban tree case workshop overview" width={1600} height={900} /><figcaption>Primary case workshop</figcaption></figure><figure className="slide-frame"><Image src="/slides/introduction/overview-13.png" alt="Previous teaching and research cases" width={1600} height={900} /><figcaption>Transfer examples</figcaption></figure></div></div>
        </section>

        <section className="content-block outcomes-block" id="outcomes">
          <p className="section-number">07 / Outcomes</p>
          <div><h2>What participants take away</h2><ul>{['A leakage-aware environmental dataset','A validated pooled surrogate model','Four environmental SHAP explanations','A portable ONNX model contract','A design-coupled diagnosis workflow'].map(item => <li key={item}><Check size={17} />{item}</li>)}</ul><figure className="slide-frame"><Image src="/slides/introduction/overview-15.png" alt="Workshop expected outcomes slide" width={1600} height={900} /><figcaption>Expected outcomes from the workshop deck</figcaption></figure></div>
        </section>

        <section className="content-block access-block" id="access">
          <p className="section-number">08 / Participant access</p>
          <div><h2>Enter the protected workshop hub</h2><p className="section-lede">Use the shared passcode supplied by the tutors. Setup guidance, PDF slides, code, sample data, plugin resources and private feedback are organized inside the participant channel. The <Link className="placeholder-link" href="/qa">public Q&amp;A record</Link> is open for everyone to read and reply.</p><AccessForm compact /></div>
        </section>

        <footer className="site-footer"><strong>Human–AI Teaming · eCAADe 2026</strong><span><a href="https://fricker-arch-aalto.fi/" target="_blank" rel="noreferrer">Pia Fricker</a> · <a href="https://yaochaowen.com/" target="_blank" rel="noreferrer">Chaowen Yao</a> · Zubin Tan · Yichao Shi · Chenhao Zhu</span><span>Web developed by <a href="https://yaochaowen.com/" target="_blank" rel="noreferrer">Yao Chaowen</a> · <a href="mailto:chaowen.yao@aalto.fi">chaowen.yao@aalto.fi</a> · <a href="mailto:vinceyao@outlook.com">vinceyao@outlook.com</a></span></footer>
      </div>
    </main>
  );
}
