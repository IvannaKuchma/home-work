import React, {useEffect, useState} from "react";
import axios from 'axios';

const UserData = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div>
      <h2>Інформація про користувача</h2>
      {user && (
        <div>
          <p><strong>Ім'я:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Телефон:</strong> {user.phone}</p>
          <p><strong>Адреса:</strong> {user.address.street}, {user.address.city}</p>
        </div>
      )}
    </div>
  );
}
export default UserData;