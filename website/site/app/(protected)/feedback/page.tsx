import { FeedbackForm } from '@/components/feedback-form';

export const metadata = { title: 'Feedback channel' };

export default function FeedbackPage() {
  return <><p className="hub-eyebrow">Private tutor channel</p><h1 className="hub-title">Workshop feedback</h1><p className="hub-lede">This channel is separate from Q&amp;A. Submissions are not shown to participants. Keep the anonymous option selected unless you want to identify your response.</p><FeedbackForm /></>;
}
