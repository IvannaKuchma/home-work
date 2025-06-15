import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Posts() {
  const { data: posts, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <Loader />;

  return (
    <div className="grid gap-4">
      {posts.map(post => (
        <div key={post.id} className="border p-4">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

