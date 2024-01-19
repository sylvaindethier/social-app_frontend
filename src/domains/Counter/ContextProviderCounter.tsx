import { createContext, useContext } from "solid-js";
import type { Accessor, ParentComponent } from "solid-js";
import type { Value, Props } from "./types";
import { createSignalCounter } from "./createSignalCounter";

type ProviderCounter = {
  getCounter: Accessor<Value>;
  incrementCounter: () => void;
  decrementCounter: () => void;
};
const contextCounter = createContext<ProviderCounter>();

export function useContextCounter(): ProviderCounter {
  const provider = useContext(contextCounter);
  if (undefined === provider) {
    throw new Error("<ContextProviderCounter /> required");
  }
  return provider;
}

export const ContextProviderCounter: ParentComponent<Props> = (props) => {
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
