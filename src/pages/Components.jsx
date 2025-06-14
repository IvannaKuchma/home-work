import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Components = () => {
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setComponents(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {components.map((comment) => (
                <div
                    key={comment.id}
                    className="p-4 border rounded"
                >
                    <h3 className="font-semibold">{comment.name}</h3>
                    <p className="text-sm text-grey-600"> {comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Components;