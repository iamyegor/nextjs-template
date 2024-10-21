import { todosTable } from "@/db/schema";
import { log } from "console";
import "dotenv/config";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { title } from "process";

const db = drizzle(process.env.DATABASE_URL!);

async function runMigrations() {
    try {
        await migrate(db, { migrationsFolder: "./db/drizzle" });
        console.log("Migrations completed successfully");
    } catch (error) {
        console.error("Migration failed:", error);
    }
}

export async function seedTodos() {
    const initialTodos = [
        { title: "Memorize a poem", completed: false },
        { title: "Read a book", completed: false },
        { title: "Write a letter", completed: false },
        { title: "Walk the dog", completed: false },
        { title: "Do the laundry", completed: false },
        { title: "Do the dishes", completed: false },
        { title: "Clean the house", completed: false },
        { title: "Cook dinner", completed: false },
        { title: "Buy groceries", completed: false },
        { title: "Go to the gym", completed: false },
        { title: "Go for a run", completed: false },
    ];

    await db.transaction(async (tx) => {
        for (const todo of initialTodos) {
            const existingTodo = await tx
                .select()
                .from(todosTable)
                .where(eq(todosTable.title, todo.title))
                .limit(1);

            if (existingTodo.length === 0) {
                await tx.insert(todosTable).values(todo);
            }
        }
    });

    console.log("Seeding completed");
}

runMigrations().then(() => seedTodos());

export default db;
