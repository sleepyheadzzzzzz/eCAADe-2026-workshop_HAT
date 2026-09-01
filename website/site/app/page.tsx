import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { AccessForm } from '@/components/access-form';

const nav = [
  ['#introduction', 'Introduction'],
  ['#curriculum', 'Curriculum'],
  ['#schedule', 'Schedule'],
  ['#methodology', 'Methodology'],
  ['#cases', 'Cases'],
  ['#access', 'Participant access'],
];

const modules = [
  ['01', 'Surrogate model introduction'],
  ['02', 'Feature extraction and data preparation'],
  ['03', 'Model training, validation and test'],
  ['04', 'Environmental SHAP interpretation'],
  ['05', 'ONNX model encapsulation'],
  ['06', 'Design support and spatial diagnosis'],
  ['07', 'Optional agentic optimization'],
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
        <Link className="sidebar-access" href="/access">Enter hub <ArrowRight size={15} /></Link>
      </aside>

      <div className="landing-content">
        <header className="mobile-header"><Link className="site-mark" href="/"><span>HAT</span><strong>eCAADe 2026</strong></Link><Link href="/access">Access</Link></header>

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

        <section className="content-block" id="curriculum">
          <p className="section-number">02 / Curriculum</p>
          <div><h2>Seven connected modules</h2><div className="module-list">{modules.map(([number, title]) => <article key={number}><span>{number}</span><h3>{title}</h3><ArrowRight size={17} /></article>)}</div></div>
        </section>

        <section className="content-block" id="schedule">
          <p className="section-number">03 / Schedule</p>
          <div><h2>Two days, one continuous workflow</h2><div className="schedule-grid"><article><span>Day 01 · 07.09</span><h3>Understand and reproduce</h3><p>Framing, methodology, urban-tree case, guided modelling and first design application.</p></article><article><span>Day 02 · 08.09 · Optional</span><h3>Adapt and exchange</h3><p>Discussion, self-directed experimentation, peer support, sharing and feedback.</p></article></div><figure className="slide-frame"><Image src="/slides/introduction/overview-8.png" alt="Workshop schedule slide" width={1600} height={900} /><figcaption>Workshop schedule · detailed room and Zoom information: To be published soon</figcaption></figure></div>
        </section>

        <section className="content-block" id="methodology">
          <p className="section-number">04 / Methodology</p>
          <div><h2>Evidence → model → explanation → design</h2><p className="section-lede">Participants work with clean splits, editable XGBoost settings, VIF diagnostics and four environmental SHAP views before exporting a tested ONNX model.</p><div className="image-pair"><figure className="slide-frame"><Image src="/slides/introduction/overview-4.png" alt="Workflow from sensor and simulation data to design" width={1600} height={900} /><figcaption>Overall workflow</figcaption></figure><figure className="slide-frame"><Image src="/slides/introduction/overview-9.png" alt="Seven methodology steps" width={1600} height={900} /><figcaption>Seven methodology steps</figcaption></figure></div><Link className="text-link" href="/access">Open the protected methodology pages <ArrowRight size={15} /></Link></div>
        </section>

        <section className="content-block" id="cases">
          <p className="section-number">05 / Cases</p>
          <div><h2>One complete case, four transfer directions</h2><div className="case-strip"><span>Urban trees</span><span>Thermal comfort</span><span>Construction carbon</span><span>Street vitality</span><span>Spatial safety</span></div><div className="image-pair"><figure className="slide-frame"><Image src="/slides/introduction/overview-10.png" alt="Urban tree case workshop overview" width={1600} height={900} /><figcaption>Primary case workshop</figcaption></figure><figure className="slide-frame"><Image src="/slides/introduction/overview-12.png" alt="Previous teaching and research cases" width={1600} height={900} /><figcaption>Transfer examples</figcaption></figure></div></div>
        </section>

        <section className="content-block outcomes-block">
          <p className="section-number">06 / Outcomes</p>
          <div><h2>What participants take away</h2><ul>{['A leakage-aware environmental dataset','A validated pooled surrogate model','Four environmental SHAP explanations','A portable ONNX model contract','A design-coupled diagnosis workflow'].map(item => <li key={item}><Check size={17} />{item}</li>)}</ul><figure className="slide-frame"><Image src="/slides/introduction/overview-14.png" alt="Workshop expected outcomes slide" width={1600} height={900} /><figcaption>Expected outcomes from the workshop deck</figcaption></figure></div>
        </section>

        <section className="content-block access-block" id="access">
          <p className="section-number">07 / Participant access</p>
          <div><h2>Enter the protected workshop hub</h2><p className="section-lede">Use the shared passcode supplied by the tutors. Setup guidance, PDF slides, code, sample data, plugin resources, Q&A and private feedback are organized inside the participant channel.</p><AccessForm compact /></div>
        </section>

        <footer className="site-footer"><strong>Human–AI Teaming · eCAADe 2026</strong><span>Pia Fricker · Chaowen Yao · <a href="https://github.com/SHIyichao98" target="_blank" rel="noreferrer">Yichao Shi ↗</a> · Zubin Tan</span><span>Living workshop draft</span></footer>
      </div>
    </main>
  );
}
