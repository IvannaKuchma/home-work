import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {users.map((user) => (
                <div key={user.id}
                    className="p-4 border rounded"
                >
                    <h3 className="font-bold">{user.name}</h3>
                    <p className="text-sm text-grey-600">{user.address.city}, {user.address.street}</p>
                </div>
            ))}
        </div>
    );
}

export default Users;