import type { Component } from "solid-js";
import { useContextCounter } from "#/domains/Counter/ContextProviderCounter";

// @DEBUG
import { debugProps } from "#/debug/debugProps";
const display = "<domains/Counter/routes/use-context/CounterUseContext>";

export const CounterUseContext: Component = (props) => {
  // @DEBUG
  debugProps(display, props);

  const { getCounter, incrementCounter, decrementCounter } = useContextCounter();
  return (
    <div id="CounterUseContext">
      <h3>CounterUseContext: Component</h3>
      <div>getCounter(): {getCounter()}</div>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};
