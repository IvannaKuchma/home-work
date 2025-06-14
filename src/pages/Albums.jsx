import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((data) => {
                setAlbums(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='grid gap-4'>
            {albums.map((album) => (
                <div
                    key={album.id}
                    className="p-4 border rounded"
                >
                    <h3 className="font-semibold">{album.title}</h3>
                    <p className="text-sm text-gray-500">Album ID: {album.id}</p>
                </div>
            ))}
        </div>
    );
}

export default Albums;