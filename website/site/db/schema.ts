import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const qaPosts = sqliteTable(
  'qa_posts',
  {
    id: text('id').primaryKey(),
    displayName: text('display_name').notNull(),
    category: text('category').notNull(),
    title: text('title').notNull(),
    body: text('body').notNull(),
    status: text('status').notNull().default('open'),
    createdAt: text('created_at').notNull(),
    updatedAt: text('updated_at').notNull(),
  },
  (table) => [
    index('qa_posts_created_idx').on(table.createdAt),
    index('qa_posts_category_idx').on(table.category),
    index('qa_posts_status_idx').on(table.status),
  ],
);

export const qaReplies = sqliteTable(
  'qa_replies',
  {
    id: text('id').primaryKey(),
    postId: text('post_id').notNull().references(() => qaPosts.id),
    displayName: text('display_name').notNull(),
    body: text('body').notNull(),
    isInstructor: integer('is_instructor').notNull().default(0),
    createdAt: text('created_at').notNull(),
  },
  (table) => [index('qa_replies_post_idx').on(table.postId)],
);

export const feedback = sqliteTable('feedback', {
  id: text('id').primaryKey(),
  session: text('session').notNull(),
  usefulness: integer('usefulness').notNull(),
  pace: text('pace').notNull(),
  confidenceBefore: integer('confidence_before'),
  confidenceAfter: integer('confidence_after'),
  usefulComponent: text('useful_component'),
  confusingComponent: text('confusing_component'),
  missingSupport: text('missing_support'),
  changeRequest: text('change_request'),
  contactEmail: text('contact_email'),
  anonymous: integer('anonymous').notNull().default(1),
  createdAt: text('created_at').notNull(),
});
