import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    completed: boolean("completed").default(false).notNull(),
});
