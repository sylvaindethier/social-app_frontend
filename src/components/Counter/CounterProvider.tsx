import { createSignal, createContext, useContext } from "solid-js";
import type { Accessor, ParentComponent } from "solid-js";

type Counter = {
  getCounter: Accessor<number>;
  incrementCounter: () => void;
  decrementCounter: () => void;
};
const CounterContext = createContext<Counter>();
export function useCounter(): Counter {
  const counter = useContext(CounterContext);
  if (undefined === counter) {
    throw new Error("<CounterProvider /> required");
  }
  return counter;
}

export const CounterProvider: ParentComponent<{
  initial?: number;
}> = (props) => {
  const [getCounter, setCounter] = createSignal<number>(props.initial || 0);
  const value = {
    getCounter,
    incrementCounter(): void {
      setCounter((counter) => counter + 1);
    },
    decrementCounter(): void {
      setCounter((counter) => counter - 1);
    },
  };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};
