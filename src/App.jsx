import React, { useState } from 'react';
import { UserData } from './hooks/UserData';
import './styles/style.sass';

export const App = () => {
  const [userId, setUserId] = useState(1);

  const handleNextUser = () => {
    setUserId((prev) => prev + 1);
  };

  return (
    <div className="app">
      <h1>Дані користувача</h1>
      <UserData userId={userId} />
      <button onClick={handleNextUser}>Наступний користувач</button>
    </div>
  );
};