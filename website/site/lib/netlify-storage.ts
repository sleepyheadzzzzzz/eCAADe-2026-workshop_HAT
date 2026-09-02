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

function isLocalMemoryMode() {
  return process.env.NODE_ENV !== 'production' && process.env.NETLIFY !== 'true';
}

export async function listQaPosts() {
  if (isLocalMemoryMode()) {
    return [...localQa.values()].sort((a, b) => b.created_at.localeCompare(a.created_at));
  }

  const store = getStore({ name: 'hat-workshop-qa', consistency: 'strong' });
  const blobs = [];
  for await (const page of store.list({ paginate: true })) blobs.push(...page.blobs);
  const records = await Promise.all(
    blobs.map(({ key }) => store.get(key, { type: 'json', consistency: 'strong' }) as Promise<QaPost | null>),
  );
  return records
    .filter((post): post is QaPost => Boolean(post))
    .map((post) => ({ ...post, answers: post.answers ?? [] }))
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
}

export async function saveQaPost(post: QaPost) {
  if (isLocalMemoryMode()) {
    localQa.set(post.id, post);
    return;
  }

  const store = getStore({ name: 'hat-workshop-qa', consistency: 'strong' });
  const result = await store.setJSON(post.id, post, { onlyIfNew: true });
  if (!result.modified) throw new Error('The Q&A record could not be created.');
}

export async function addQaAnswer(postId: string, answer: QaAnswer) {
  if (isLocalMemoryMode()) {
    const post = localQa.get(postId);
    if (!post) return { reason: 'not_found' as const };
    const updated = { ...post, answers: [...(post.answers ?? []), answer] };
    localQa.set(postId, updated);
    return { post: updated };
  }

  const store = getStore({ name: 'hat-workshop-qa', consistency: 'strong' });
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const current = await store.getWithMetadata(postId, { type: 'json', consistency: 'strong' });
    if (!current) return { reason: 'not_found' as const };
    if (!current.etag) continue;
    const post = current.data as QaPost;
    const updated = { ...post, answers: [...(post.answers ?? []), answer] };
    const result = await store.setJSON(postId, updated, { onlyIfMatch: current.etag });
    if (result.modified) return { post: updated };
  }
  return { reason: 'conflict' as const };
}

export async function saveFeedback(id: string, feedback: FeedbackRecord) {
  if (isLocalMemoryMode()) {
    localFeedback.set(id, feedback);
    return;
  }

  const store = getStore({ name: 'hat-workshop-feedback', consistency: 'strong' });
  const result = await store.setJSON(id, feedback, { onlyIfNew: true });
  if (!result.modified) throw new Error('The feedback record could not be created.');
}
