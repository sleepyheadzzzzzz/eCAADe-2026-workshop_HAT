'use client';

import { useState } from 'react';
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react';

export function FeedbackForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault(); setSubmitting(true);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.anonymous = (form.elements.namedItem('anonymous') as HTMLInputElement).checked ? 'true' : 'false';
    const response = await fetch('/api/feedback', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...data, anonymous: data.anonymous === 'true' }) });
    if (response.ok) { form.reset(); setSent(true); }
    setSubmitting(false);
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <div className="field-grid">
        <div className="field"><label htmlFor="session">Session</label><select id="session" name="session" defaultValue="Day 1"><option>Before workshop</option><option>Day 1</option><option>Day 2</option><option>After workshop</option></select></div>
        <div className="field"><label htmlFor="usefulness">Overall usefulness · 1–5</label><select id="usefulness" name="usefulness" defaultValue="4"><option value="1">1 · low</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5 · high</option></select></div>
        <div className="field"><label htmlFor="pace">Pace</label><select id="pace" name="pace" defaultValue="About right"><option>Too slow</option><option>About right</option><option>Too fast</option><option>Varied by module</option></select></div>
        <div className="field"><label htmlFor="confidenceBefore">Confidence before · 1–5</label><select id="confidenceBefore" name="confidenceBefore" defaultValue="3"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div>
        <div className="field"><label htmlFor="confidenceAfter">Confidence now · 1–5</label><select id="confidenceAfter" name="confidenceAfter" defaultValue="4"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div>
        <div className="field full"><label htmlFor="usefulComponent">What was most useful?</label><textarea id="usefulComponent" name="usefulComponent" /></div>
        <div className="field full"><label htmlFor="confusingComponent">What remained unclear?</label><textarea id="confusingComponent" name="confusingComponent" /></div>
        <div className="field full"><label htmlFor="missingSupport">What support or material was missing?</label><textarea id="missingSupport" name="missingSupport" /></div>
        <div className="field full"><label htmlFor="changeRequest">What should we change?</label><textarea id="changeRequest" name="changeRequest" /></div>
        <div className="field full"><label htmlFor="contactEmail">Email · optional, only if you want a reply</label><input id="contactEmail" name="contactEmail" type="email" maxLength={160} /></div>
        <label className="checkbox-field"><input defaultChecked id="anonymous" name="anonymous" type="checkbox" /> Store this submission as anonymous</label>
      </div>
      <button className="submit-button" type="submit" disabled={submitting}>{submitting ? <LoaderCircle className="spin" size={16} /> : <Send size={16} />}Send private feedback</button>
      {sent && <p className="form-success"><CheckCircle2 size={17} /> Thank you. Your feedback has been recorded.</p>}
    </form>
  );
}
