import { getStore } from '@netlify/blobs';

export type QaPost = {
  id: string;
  display_name: string;
  category: string;
  title: string;
  body: string;
  status: string;
  created_at: string;
  answers: QaAnswer[];
};

export type QaAnswer = {
  id: string;
  display_name: string;
  body: string;
  created_at: string;
};

export type FeedbackRecord = Record<string, string | number | null>;

const localQa = new Map<string, QaPost>();
const localFeedback = new Map<string, FeedbackRecord>();

function hasNetlifyContext() {
  return Boolean(process.env.NETLIFY || process.env.NETLIFY_SITE_ID);
}

export async function listQaPosts() {
  if (!hasNetlifyContext()) {
    return [...localQa.values()].sort((a, b) => b.created_at.localeCompare(a.created_at));
  }

  const store = getStore({ name: 'hat-workshop-qa', consistency: 'strong' });
  const { blobs } = await store.list();
  const records = await Promise.all(
    blobs.slice(0, 100).map(({ key }) => store.get(key, { type: 'json' }) as Promise<QaPost | null>),
  );
  return records
    .filter((post): post is QaPost => Boolean(post))
    .map((post) => ({ ...post, answers: post.answers ?? [] }))
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
}

export async function saveQaPost(post: QaPost) {
  if (!hasNetlifyContext()) {
    localQa.set(post.id, post);
    return;
  }

  const store = getStore({ name: 'hat-workshop-qa', consistency: 'strong' });
  await store.setJSON(post.id, post, { onlyIfNew: true });
}

export async function addQaAnswer(postId: string, answer: QaAnswer) {
  if (!hasNetlifyContext()) {
    const post = localQa.get(postId);
    if (!post) return null;
    const updated = { ...post, answers: [...(post.answers ?? []), answer] };
    localQa.set(postId, updated);
    return updated;
  }

  const store = getStore({ name: 'hat-workshop-qa', consistency: 'strong' });
  const post = (await store.get(postId, { type: 'json', consistency: 'strong' })) as QaPost | null;
  if (!post) return null;
  const updated = { ...post, answers: [...(post.answers ?? []), answer] };
  await store.setJSON(postId, updated);
  return updated;
}

export async function saveFeedback(id: string, feedback: FeedbackRecord) {
  if (!hasNetlifyContext()) {
    localFeedback.set(id, feedback);
    return;
  }

  const store = getStore({ name: 'hat-workshop-feedback', consistency: 'strong' });
  await store.setJSON(id, feedback, { onlyIfNew: true });
}
