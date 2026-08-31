CREATE TABLE `qa_posts` (
	`id` text PRIMARY KEY NOT NULL,
	`display_name` text NOT NULL,
	`category` text NOT NULL,
	`title` text NOT NULL,
	`body` text NOT NULL,
	`status` text DEFAULT 'open' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `qa_posts_created_idx` ON `qa_posts` (`created_at`);
--> statement-breakpoint
CREATE INDEX `qa_posts_category_idx` ON `qa_posts` (`category`);
--> statement-breakpoint
CREATE INDEX `qa_posts_status_idx` ON `qa_posts` (`status`);
--> statement-breakpoint
CREATE TABLE `qa_replies` (
	`id` text PRIMARY KEY NOT NULL,
	`post_id` text NOT NULL,
	`display_name` text NOT NULL,
	`body` text NOT NULL,
	`is_instructor` integer DEFAULT 0 NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `qa_posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `qa_replies_post_idx` ON `qa_replies` (`post_id`);
--> statement-breakpoint
CREATE TABLE `feedback` (
	`id` text PRIMARY KEY NOT NULL,
	`session` text NOT NULL,
	`usefulness` integer NOT NULL,
	`pace` text NOT NULL,
	`confidence_before` integer,
	`confidence_after` integer,
	`useful_component` text,
	`confusing_component` text,
	`missing_support` text,
	`change_request` text,
	`contact_email` text,
	`anonymous` integer DEFAULT 1 NOT NULL,
	`created_at` text NOT NULL
);
