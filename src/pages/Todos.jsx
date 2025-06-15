import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Todos() {
  const { data: todos, loading } = useFetch("https://jsonplaceholder.typicode.com/todos?_limit=20");

  if (loading) return <Loader />;

  return (
    <div className="grid gap-2">
      {todos.map(todo => (
        <div key={todo.id} className="border p-2 flex items-center gap-2">
          <input type="checkbox" checked={todo.completed} readOnly />
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  );
}
