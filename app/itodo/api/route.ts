import getPagedTodos from "@/app/itodo/api/queries/getPagedTodos";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const pageParam = searchParams.get("pageParam");
    if (!pageParam || isNaN(parseInt(pageParam))) {
        return Response.json({ error: `Invalid pageParam: ${pageParam}` }, { status: 400 });
    }

    const todos = await getPagedTodos(parseInt(pageParam));
    return Response.json(todos);
}
