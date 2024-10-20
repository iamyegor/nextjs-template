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

export async function fetchTodos(): Promise<Todo[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return todos;

    // const response = await fetch("/api/todos", { next: { revalidate: 60 } });
    // const todos: Todo[] = await response.json();
    // return todos;
}

export async function sendMarkTodoCompletedRequest(todoId: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    todos = todos.map((todo) => (todo.id === todoId ? { ...todo, completed: true } : todo));

    // await fetch("/api/todos/mark-completed", { method: "POST", body: JSON.stringify({ todoId }) });
}
