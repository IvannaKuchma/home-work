import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((data) => {
                setPhotos(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {photos.map((photo) => (
                <div key={photo.id}
                    className="p-4 border rounded p-2">
                    <img src={photo.thumbnailUrl} alt={photo.title} className="w-full h-auto mb-2" />
                    <p className="text-sm">{photo.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Photos;