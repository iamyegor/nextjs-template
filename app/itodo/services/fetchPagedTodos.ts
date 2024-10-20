import PagedTodoResponse from "@/app/itodo/services/types/PagedTodoResponse";
import Todo from "@/types/Todo";

let todos: Todo[] = [
    { title: "Memorize a poem", completed: false, id: 1 },
    { title: "Read a book", completed: false, id: 2 },
    { title: "Write a letter", completed: false, id: 3 },
    { title: "Walk the dog", completed: false, id: 4 },
    { title: "Do the laundry", completed: false, id: 5 },
    { title: "Do the dishes", completed: false, id: 6 },
    { title: "Clean the house", completed: false, id: 7 },
    { title: "Cook dinner", completed: false, id: 8 },
    { title: "Buy groceries", completed: false, id: 9 },
    { title: "Go to the gym", completed: false, id: 10 },
    { title: "Go for a run", completed: false, id: 11 },
];

export async function fetchPagedTodos({
    pageParam,
}: {
    pageParam: number;
}): Promise<PagedTodoResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const limit = 2;
    const skip = (pageParam - 1) * limit;
    const pagedTodos = todos.slice(skip, skip + limit);

    const nextPage = skip + limit < todos.length ? pageParam + 1 : null;

    return {
        todos: pagedTodos,
        nextPage,
    };

    // const response = await axios.get<TodoResponse>("https://dummyjson.com/todos", {
    //     params: { page: pageParam },
    // });
    // return response.data;
}

export async function sendMarkTodoCompletedRequest(todoId: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    todos = todos.map((todo) => (todo.id === todoId ? { ...todo, completed: true } : todo));
    // await api.post("/todo/mark-completed", { todoId });
}
