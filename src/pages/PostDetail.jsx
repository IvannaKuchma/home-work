import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default PostDetail;