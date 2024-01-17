import { createSignal } from "solid-js";
import type { Component } from "solid-js";

export const Counter: Component<{
  initial?: number;
}> = (props) => {
  // console.debug("Counter component", props);
  const [getCounter, setCounter] = createSignal<number>(props.initial || 0);
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
