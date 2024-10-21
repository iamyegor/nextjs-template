import Link from "next/link";
import { Infinity, ListTodo } from "lucide-react";

export default function HomePage() {
    return (
        <div className=" bg-gradient-to-br from-purple-100 to-indigo-100 font-sans">
            <div className="container min-h-screen flex flex-col md:flex-row justify-center items-center py-12 gap-8">
                <div className="w-full md:w-1/2 max-w-md p-8 bg-white border border-purple-300 rounded-3xl duration-300 flex flex-col justify-between items-center">
                    <div className="flex flex-col items-center">
                        <ListTodo className="w-24 h-24 text-purple-600 mb-3" />
                        <h1 className="text-[32px] lg:text-[45px] font-bold text-purple-800 mb-4 text-center leading-[1.1]">
                            Finite Todo List
                        </h1>
                        <p className="text-purple-600 mb-12 text-center">
                            Organize your tasks with a clear endpoint
                        </p>
                    </div>
                    <Link
                        href="/ftodo"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg lg:text-xl transition-colors duration-300"
                    >
                        Explore Finite
                    </Link>
                </div>
                <div className="w-full md:w-1/2 max-w-md p-8 bg-white border border-indigo-300 rounded-3xl duration-300 flex flex-col justify-between items-center">
                    <div className="flex flex-col items-center">
                        <Infinity className="w-24 h-24 text-indigo-600 mb-3" />
                        <h1 className="text-[32px] lg:text-[45px] font-bold text-indigo-800 mb-4 leading-[1.1] text-center">
                            Infinite Todo List
                        </h1>
                        <p className="text-indigo-600 mb-12 text-center">
                            Never-ending productivity for ambitious goals
                        </p>
                    </div>
                    <Link
                        href="/itodo"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg lg:text-xl transition-colors duration-300"
                    >
                        Explore Infinite
                    </Link>
                </div>
            </div>
        </div>
    );
}
