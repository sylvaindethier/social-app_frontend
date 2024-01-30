import { useContextCounter } from "./ContextProviderCounter";
import type { Component } from "solid-js";

// // @DEBUG
// import { debugProps } from "#/lib/debug/debugProps";
// const display = "<components/Counter/CounterUseContext>";

export const CounterUseContext: Component = (/*props*/) => {
  // // @DEBUG
  // debugProps(display, props);

  const { getCounter, incrementCounter, decrementCounter } =
    useContextCounter();
  return (
    <div id="CounterUseContext">
      <h3>CounterUseContext</h3>
      <div>getCounter(): {getCounter()}</div>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};
