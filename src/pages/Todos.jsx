import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='grid gap-4'>
            {todos.map((todo) => (
                <div key={todo.id}
                    className="p-4 border rounded flex justify-between items-center">
                    <span>{todo.title}</span>
                   <span className={todo.completed ? 'text-green-600' : 'text-red-600'}>
                     {todo.completed ? '✔' : '✘'}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Todos;