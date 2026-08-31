import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Blocks,
  CalendarDays,
  CircleCheck,
  Code2,
  Network,
  Sparkles,
} from 'lucide-react';
import { AccessForm } from '@/components/access-form';

const outcomes = [
  'Prepare an environmental dataset without spatial or tree-level leakage.',
  'Train, validate and test a transparent surrogate-model workflow.',
  'Interpret environmental effects with four complementary SHAP views.',
  'Export the model to ONNX and reconnect it to Grasshopper design decisions.',
];

const modules = [
  ['01', 'Frame', 'Surrogate models and human–AI teaming'],
  ['02', 'Extract', 'Environmental features and data quality'],
  ['03', 'Train', 'Model comparison and spatial validation'],
  ['04', 'Explain', 'Beeswarm, dependence, waterfall and spatial SHAP'],
  ['05', 'Package', 'ONNX encapsulation for design software'],
  ['06', 'Apply', 'Diagnosis and performance-guided design'],
  ['07', 'Extend', 'Optional agentic and multi-objective optimization'],
];

export default function Home() {
  return (
    <main>
      <header className="public-nav">
        <Link href="/" className="wordmark" aria-label="Workshop home">
          <span className="wordmark-mark">HAT</span>
          <span>eCAADe 2026</span>
        </Link>
        <nav aria-label="Public navigation">
          <a href="#curriculum">Curriculum</a>
          <a href="#schedule">Schedule</a>
          <Link href="/access" className="nav-access">Participant access</Link>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={15} /> eCAADe 2026 · Hybrid workshop</p>
            <h1>From prediction to explainable, design-coupled intelligence.</h1>
            <p className="hero-lede">
              A hands-on two-day workshop for architects, landscape designers and
              researchers who want to turn environmental data into an interpretable
              model—and then put that model back into the design loop.
            </p>
            <div className="hero-actions">
              <Link href="/access" className="button button-primary">Enter participant hub <ArrowRight size={17} /></Link>
              <a href="#curriculum" className="button button-secondary">Explore curriculum</a>
            </div>
            <dl className="hero-meta">
              <div><dt>Dates</dt><dd>7–8 September 2026</dd></div>
              <div><dt>Format</dt><dd>Two-day hybrid · Day 2 optional</dd></div>
              <div><dt>Capacity</dt><dd>15–20 ideal · 30 maximum</dd></div>
            </dl>
          </div>
          <div className="hero-visual" aria-label="Workshop visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-signal"><Network size={42} /></div>
            <div className="hero-tag tag-data">DATA</div>
            <div className="hero-tag tag-model">MODEL</div>
            <div className="hero-tag tag-design">DESIGN</div>
            <Image src="/images/workshop-hero.png" alt="Title slide from the Human–AI Teaming workshop materials" width={960} height={540} priority />
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Workshop sequence">
        <span>OBSERVE</span><i /> <span>MODEL</span><i /> <span>EXPLAIN</span><i />
        <span>ENCAPSULATE</span><i /> <span>DESIGN</span>
      </section>

      <section className="section-shell intro-section">
        <div><p className="section-kicker">The proposition</p><h2>Machine learning becomes useful to design when its reasoning is inspectable.</h2></div>
        <div className="intro-copy">
          <p>Participants follow one complete, reproducible workflow: prepare urban environmental data, compare models, test generalization, interpret environmental contributions, export the trained model and reconnect it to a spatial design environment.</p>
          <p>The urban-tree carbon case anchors the exercises. Related cases in thermal comfort, construction carbon, street vitality and spatial safety show how the methodology transfers across design questions.</p>
        </div>
      </section>

      <section id="curriculum" className="section-shell curriculum-section">
        <div className="section-title-row">
          <div><p className="section-kicker">Curriculum</p><h2>Seven connected modules</h2></div>
          <p>Each module produces an artifact used by the next.</p>
        </div>
        <div className="module-grid">
          {modules.map(([number, action, title], index) => (
            <article className="module-card" key={number}>
              <div className="module-top"><span>{number}</span>{index < 6 && <ArrowRight size={16} />}</div>
              <p>{action}</p><h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-band">
        <div className="section-shell outcome-grid">
          <div>
            <p className="section-kicker section-kicker-light">Expected outcome</p>
            <h2>Leave with a workflow you can inspect, adapt and deploy.</h2>
            <div className="tool-row">
              <span><Code2 size={17} /> Python / Colab</span><span><Blocks size={17} /> Rhino / Grasshopper</span><span><Network size={17} /> ONNX</span>
            </div>
          </div>
          <ul className="outcome-list">{outcomes.map((outcome) => <li key={outcome}><CircleCheck size={20} />{outcome}</li>)}</ul>
        </div>
      </section>

      <section id="schedule" className="section-shell schedule-section">
        <div className="section-title-row"><div><p className="section-kicker">Schedule</p><h2>Two days, one continuous workflow</h2></div><CalendarDays size={32} /></div>
        <div className="day-grid">
          <article className="day-card">
            <p>DAY 01 · 07.09</p><h3>Understand and reproduce</h3>
            <ul><li><time>09:30</time> Welcome, introductions and workshop framing</li><li><time>10:45</time> Methodology lecture</li><li><time>13:30</time> Urban-tree case study</li><li><time>15:15</time> Guided case workshop</li></ul>
          </article>
          <article className="day-card day-card-accent">
            <p>DAY 02 · 08.09 · OPTIONAL</p><h3>Adapt, test and share</h3>
            <ul><li><time>09:30</time> Discussion panel</li><li><time>10:30</time> Self-directed workshop and Q&amp;A</li><li><time>13:30</time> Iteration, peer exchange and support</li><li><time>16:15</time> Sharing, closing and feedback</li></ul>
          </article>
        </div>
      </section>

      <section className="section-shell access-callout">
        <div><p className="section-kicker">Participant hub</p><h2>Slides, tutorials, scripts and discussion in one protected space.</h2><p>Some materials are still being prepared. Their place is reserved and clearly marked.</p></div>
        <AccessForm compact />
      </section>

      <footer className="public-footer">
        <div><strong>Human–AI Teaming</strong><p>eCAADe 2026 workshop</p></div>
        <div><strong>Tutors</strong><p>Pia Fricker · Chaowen Yao · Yichao Shi · Zubin Tan</p></div>
        <p className="footer-note">Workshop draft · content and imagery will continue to evolve.</p>
      </footer>
    </main>
  );
}
