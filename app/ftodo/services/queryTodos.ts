"use server";

import db from "@/db";
import { todosTable } from "@/db/schema";
import Todo from "@/types/Todo";

export default async function queryTodos(): Promise<Todo[]> {
    const allTodos = await db.select().from(todosTable);
    return allTodos as Todo[];

    // const response = await fetch("/api/todos", { next: { revalidate: 60 } });
    // return await response.json() as Todo[];
}
