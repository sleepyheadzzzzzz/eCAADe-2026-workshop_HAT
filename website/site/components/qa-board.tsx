'use client';

import { useCallback, useEffect, useState } from 'react';
import { LoaderCircle, MessageCircleQuestion, Send } from 'lucide-react';

type Post = { id: string; display_name: string; category: string; title: string; body: string; status: string; created_at: string };

export function QaBoard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const load = useCallback(async () => {
    const response = await fetch('/api/qa');
    if (response.ok) setPosts(((await response.json()) as { posts: Post[] }).posts);
    setLoading(false);
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault(); setSubmitting(true); setMessage('');
    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/qa', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(Object.fromEntries(form)) });
    if (response.ok) { event.currentTarget.reset(); setMessage('Your question is now visible to the participant group.'); await load(); }
    else setMessage('The question could not be posted. Please check the form and try again.');
    setSubmitting(false);
  }

  return (
    <>
      <form className="form-card" onSubmit={submit}>
        <div className="field-grid">
          <div className="field"><label htmlFor="displayName">Display name</label><input id="displayName" name="displayName" maxLength={80} required /></div>
          <div className="field"><label htmlFor="category">Category</label><select id="category" name="category" defaultValue="Model training"><option>Environment setup</option><option>Data preparation</option><option>Model training</option><option>SHAP interpretation</option><option>ONNX / Grasshopper</option><option>Design application</option><option>Other</option></select></div>
          <div className="field full"><label htmlFor="title">Question title</label><input id="title" name="title" maxLength={140} required /></div>
          <div className="field full"><label htmlFor="body">Question and context</label><textarea id="body" name="body" maxLength={2500} required /></div>
        </div>
        <button className="submit-button" type="submit" disabled={submitting}>{submitting ? <LoaderCircle className="spin" size={16} /> : <Send size={16} />}Post to Q&amp;A</button>
        {message && <output className="form-success">{message}</output>}
      </form>
      <div className="qa-list">
        {loading && <p><LoaderCircle className="spin" size={18} /> Loading questions…</p>}
        {!loading && posts.length === 0 && <div className="empty-state"><MessageCircleQuestion size={28} /><h3>No questions yet</h3><p>Start the shared knowledge base by posting the first question.</p></div>}
        {posts.map((post) => <article className="qa-post" key={post.id}><div className="qa-post-top"><span className="status-pill live">{post.category}</span><span className="qa-meta">{post.display_name} · {new Date(post.created_at).toLocaleDateString()}</span></div><h3>{post.title}</h3><p>{post.body}</p></article>)}
      </div>
    </>
  );
}
