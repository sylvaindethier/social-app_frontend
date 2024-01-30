import { createSignalCounter } from "./createSignalCounter";
import type { Component } from "solid-js";
import type { CounterProps } from "./types";

// // @DEBUG
// import { debugProps } from "#/lib/debug/debugProps";
// const display = "<components/Counter/Counter>";

export const Counter: Component<CounterProps> = (props) => {
  // // @DEBUG
  // debugProps(display, props);

  const [getCounter, setCounter] = createSignalCounter(props.initial);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  const decrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div id="Counter">
      <h3>Counter</h3>
      <div>getCounter(): {getCounter()}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
