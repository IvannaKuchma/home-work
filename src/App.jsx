import React, { useState } from 'react';
import UserData from './components/UserData';

const App = () => {
  const [userId, setUserId] = useState(1);

  return (
    <div className="container">
      <button onClick={() => setUserId(prev => (prev === 10 ? 1 : prev + 1))}>
        Завантажити користувача {userId + 1}
      </button>
      <UserData userId={userId} />
    </div>
  );
};

export default App;
