"use client";
import React, { useState } from "react";
// Challenge 1: Counter with Reset
/**
 * Challenge: Create a counter with the following features
 * - Initialize state for `count` as a number starting at 0
 * - Create buttons to increment and decrement the counter
 * - Add a reset button that sets the count back to 0
 * - Display "Even" if count is even, "Odd" if it's odd
 */

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter: {count}</h1>
      <p className="counter-text">
        Number is: {count % 2 === 0 ? "Even" : "Odd"}
      </p>
      <div className="counter-buttons">
        <button className="counter-btn increment" onClick={increment}>
          +
        </button>
        <button className="counter-btn decrement" onClick={decrement}>
          -
        </button>
        <button className="counter-btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
