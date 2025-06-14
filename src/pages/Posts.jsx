import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
        } , []);
        if (loading) {
            return <Loader />;
        }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {posts.map((post) => (
                <div
                    key={post.id}
                    onClick={() => navigate(`/posts/${post.id}`)}
                        className="p-4 border rounded cursor-pointer hover:bg-gray-100 transition-colors">
                    
                    <h2 className="font-bold">{post.title}</h2>
                    <p>{post.body.slice(0 ,80)}...</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;