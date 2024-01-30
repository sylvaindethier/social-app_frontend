import { createContext, useContext } from "solid-js";
import { createSignalCounter } from "./createSignalCounter";
import type { Accessor, ParentComponent } from "solid-js";
import type { CounterValue, CounterProps } from "./types";

type ProviderCounter = {
  getCounter: Accessor<CounterValue>;
  incrementCounter: () => void;
  decrementCounter: () => void;
};
const contextCounter = createContext<ProviderCounter>(undefined);

export function useContextCounter(): ProviderCounter {
  const provider = useContext(contextCounter);
  if (undefined === provider) {
    throw new Error("<ContextProviderCounter /> MUST wrap `useContextCounter`");
  }
  return provider;
}

export const ContextProviderCounter: ParentComponent<CounterProps> = (
  props
) => {
  const [getCounter, setCounter] = createSignalCounter(props.initial);

  const value: ProviderCounter = {
    getCounter,
    incrementCounter(): void {
      setCounter((counter) => counter + 1);
    },
    decrementCounter(): void {
      setCounter((counter) => counter - 1);
    },
  };

  return (
    <contextCounter.Provider value={value}>
      {props.children}
    </contextCounter.Provider>
  );
};
