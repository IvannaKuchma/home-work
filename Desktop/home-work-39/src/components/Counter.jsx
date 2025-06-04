import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Лічильник: {count}</p>
      <button onClick={increment}>Збільшити</button>
    </div>
  );
};

export default Counter;
