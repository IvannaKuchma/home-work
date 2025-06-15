import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Photos() {
  const { data: photos, loading } = useFetch("https://jsonplaceholder.typicode.com/photos?_limit=20");

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-2 gap-4">
      {photos.map(photo => (
        <div key={photo.id} className="border p-2">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
}