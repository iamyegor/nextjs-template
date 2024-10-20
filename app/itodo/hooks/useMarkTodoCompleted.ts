import { sendMarkTodoCompletedRequest } from "@/app/itodo/services/fetchPagedTodos";
import PagedTodoResponse from "@/app/itodo/services/types/PagedTodoResponse";
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";

const queryKey = ["todos-paged"];

export default function useMarkTodoCompleted() {
    const queryClient = useQueryClient();

    const markTodoCompletedMutation = useMutation({
        mutationFn: sendMarkTodoCompletedRequest,
        onMutate: async (todoId: number) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData =
                queryClient.getQueryData<InfiniteData<PagedTodoResponse>>(queryKey);

            queryClient.setQueryData<InfiniteData<PagedTodoResponse>>(queryKey, (data) => {
                if (!data) return previousData;

                return {
                    ...data,
                    pages: data.pages.map((page) => ({
                        ...page,
                        todos: page.todos.map((todo) =>
                            todo.id === todoId ? { ...todo, completed: true } : todo
                        ),
                    })),
                };
            });

            return { previousData };
        },
        onError: (_, __, context) => {
            if (context?.previousData) queryClient.setQueryData(queryKey, context?.previousData);
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
    });

    return markTodoCompletedMutation.mutate;
}
