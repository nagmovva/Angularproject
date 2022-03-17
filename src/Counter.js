import React, { useReducer } from 'react';

const init = () => {
  return 10;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
};

export default ({ name }) => {
  const [count, dispatch] = useReducer(reducer, 0, init);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="options">
      <h1>CounterPage {name}!</h1>
      Count: {count}
      <br />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
