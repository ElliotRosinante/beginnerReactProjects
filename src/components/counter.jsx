import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((prevValue) => {
      const newValue = prevValue + 1;
      return newValue;
    });
  }

  function handleDecrement() {
    setCount((prevValue) => {
      const newValue = prevValue - 1;
      return newValue;
    });
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <div>
      <button
        onClick={() => {
          handleIncrement();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          handleDecrement();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          handleReset();
        }}
      >
        Reset
      </button>
      <h2>{count}</h2>
    </div>
  );
}

export default Counter;
