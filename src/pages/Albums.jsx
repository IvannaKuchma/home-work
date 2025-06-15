import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Albums() {
  const { data: albums, loading } = useFetch("https://jsonplaceholder.typicode.com/albums");

  if (loading) return <Loader />;

  return (
    <div className="grid gap-4">
      {albums.map(album => (
        <div key={album.id} className="border p-4">
          <h2 className="font-bold">{album.title}</h2>
        </div>
      ))}
    </div>
  );
}