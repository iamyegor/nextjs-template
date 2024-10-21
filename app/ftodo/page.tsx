import FiniteTodoList from "@/app/ftodo/components/FiniteTodoList/FiniteTodoList";
import queryTodos from "@/app/ftodo/services/queryTodos";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function FiniteTodoListPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({ queryKey: ["todos"], queryFn: queryTodos });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <FiniteTodoList />;
        </HydrationBoundary>
    );
}
