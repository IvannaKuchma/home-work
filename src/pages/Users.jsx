import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Users() {
  const { data: users, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <Loader />;

  return (
    <div className="grid gap-4">
      {users.map(user => (
        <div key={user.id} className="border p-4">
          <h2 className="font-bold">{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
}
