ALTER TABLE "todos" RENAME COLUMN "todo" TO "title";--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "completed" boolean DEFAULT false;