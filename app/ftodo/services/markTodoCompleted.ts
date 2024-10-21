"use server";

import db from "@/db";
import { todosTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function markTodoCompleted(todoId: number): Promise<void> {
    await db.update(todosTable).set({ completed: true }).where(eq(todosTable.id, todoId));

    // await fetch("/api/todos/mark-completed", { method: "POST", body: JSON.stringify({ todoId }) });
}
