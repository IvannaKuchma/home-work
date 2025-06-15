import useFetch from "../hooks/useFetch";

export default function Comments() {
  const { data: comments, loading } = useFetch("https://jsonplaceholder.typicode.com/comments");

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid gap-4">
      {comments.map(c => (
        <div key={c.id} className="border p-4">
          <h3 className="font-semibold">{c.name}</h3>
          <p className="text-sm text-gray-600">{c.email}</p>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}
