import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const { data: post, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 border">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
