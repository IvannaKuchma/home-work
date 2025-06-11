import React from 'react';
import { useUserData } from '../hooks/useUserData';

export const UserData = ({ userId }) => {
  const { data, loading, error } = useUserData(userId);

  const handleRetry = () => {
    // можеш додати setUserId з App якщо потрібно змінити id
    window.location.reload(); // простий хак для перезавантаження
  };

  if (loading) return <p>Завантаження даних...</p>;
  if (error) return (
    <div>
      <p>Сталася помилка: {error}</p>
      <button onClick={handleRetry}>Повторити</button>
    </div>
  );
  if (!data) return null;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};