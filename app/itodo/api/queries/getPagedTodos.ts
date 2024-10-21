import PagedTodoResponse from "@/app/itodo/api/types/PagedTodoResponse";
import db from "@/db";
import { todosTable } from "@/db/schema";
import { desc, sql } from "drizzle-orm";

export default async function getPagedTodos(pageParam: number): Promise<PagedTodoResponse> {
    const limit = 2;
    const offset = (pageParam - 1) * limit;

    const todos = await db
        .select()
        .from(todosTable)
        .orderBy(desc(todosTable.id))
        .limit(limit)
        .offset(offset);

    console.log("todos", todos);

    const totalCount = await db
        .select({ count: sql<number>`count(*)` })
        .from(todosTable)
        .then((result) => result[0].count);

    const nextPage = offset + limit < totalCount ? pageParam + 1 : null;

    return {
        todos,
        nextPage,
    };

    // const response = await axios.get<TodoResponse>("https://dummyjson.com/todos", {
    //     params: { page: pageParam },
    // });
    // return response.data;
}
