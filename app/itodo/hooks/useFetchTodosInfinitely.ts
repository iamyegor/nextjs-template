import PagedTodoResponse from "@/app/itodo/api/types/PagedTodoResponse";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function usePagedTodos() {
    const { ref: todosEndRef, inView: listEndInView } = useInView();
    const { data, fetchNextPage, hasNextPage, isLoading, isError } =
        useInfiniteQuery<PagedTodoResponse>({
            queryKey: ["todos-paged"],
            queryFn: ({ pageParam = 1 }) =>
                fetch(`itodo/api?pageParam=${pageParam}`).then((res) => res.json()),
            initialPageParam: 1,
            getNextPageParam: (lastPage) => {
                return lastPage.nextPage;
            },
        });

    const todos = data?.pages.flatMap((page) => page.todos) ?? [];

    useEffect(() => {
        if (listEndInView && hasNextPage) {
            fetchNextPage();
        }
    });

    return { todos, todosEndRef, hasNextPage, isLoading, isError };
}
