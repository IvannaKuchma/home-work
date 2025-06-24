import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/exampleSlice';

function ExampleComponent() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.example.count);

  return (
    <div>
      <div className="counter-value">{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default ExampleComponent;
