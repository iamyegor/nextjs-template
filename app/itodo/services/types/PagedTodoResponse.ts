import Todo from "@/types/Todo";

export default interface PagedTodoResponse {
    todos: Todo[];
    nextPage: number | null;
}
