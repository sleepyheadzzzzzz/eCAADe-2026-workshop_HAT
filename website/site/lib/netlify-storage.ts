import { getStore } from '@netlify/blobs';

export type QaPost = {
  id: string;
  display_name: string;
  category: string;
  title: string;
  body: string;
  status: string;
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

export async function saveFeedback(id: string, feedback: FeedbackRecord) {
  if (!hasNetlifyContext()) {
    localFeedback.set(id, feedback);
    return;
  }

  const store = getStore({ name: 'hat-workshop-feedback', consistency: 'strong' });
  await store.setJSON(id, feedback, { onlyIfNew: true });
}
