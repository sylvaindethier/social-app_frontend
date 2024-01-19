import type { Component } from "solid-js";
import type { Props } from "#/domains/Counter/types";
import { createSignalCounter } from "#/domains/Counter/createSignalCounter";

// @DEBUG
import { debugProps } from "#/debug/debugProps";
const display = "<domains/Counter/routes/index/Counter>";

export const Counter: Component<Props> = (props) => {
  // @DEBUG
  debugProps(display, props);

  const [getCounter, setCounter] = createSignalCounter(props.initial);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  const decrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div id="Counter">
      <h3>Counter : Component</h3>
      <div>getCounter(): {getCounter()}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
