import { FeedbackForm } from '@/components/feedback-form';
import { QaBoard } from '@/components/qa-board';

export const metadata = { title: 'Discussion' };

export default function DiscussionPage() {
  return <>
    <p className="hub-eyebrow">05 / Participant discussion</p><h1 className="hub-title">Discuss &amp;<br />reflect</h1>
    <p className="hub-lede">The shared Q&A and private feedback channel are intentionally separate. Questions build a participant knowledge base; feedback is visible only to the tutor team.</p>
    <nav className="discussion-jump" aria-label="Discussion channels"><a href="#qa-channel"><span>01</span>Q&amp;A channel</a><a href="#feedback-channel"><span>02</span>Feedback channel</a></nav>

    <section className="discussion-section" id="qa-channel"><div className="discussion-heading"><span>01</span><div><h2>Questions &amp; answers</h2><p>Post technical or conceptual questions that may help the whole group. New submissions appear below the form.</p></div></div><QaBoard /></section>
    <section className="discussion-section" id="feedback-channel"><div className="discussion-heading"><span>02</span><div><h2>Private feedback</h2><p>Rate the workshop and describe what was useful, unclear or missing. Keep anonymous selected unless you want a reply.</p></div></div><FeedbackForm /></section>
  </>;
}
