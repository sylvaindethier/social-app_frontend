import type { Component } from "solid-js";
import { useCounter } from "./CounterProvider";

export const UseCounter: Component = () => {
  const { getCounter, incrementCounter, decrementCounter } = useCounter();
  return (
    <div id="UseCounter">
      <h3>UseCounter: Component</h3>
      <div>getCounter(): {getCounter()}</div>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};
