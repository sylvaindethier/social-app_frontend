import type { ParentComponent } from "solid-js";

import { CounterProvider } from "./components/Counter/CounterProvider";
export const AppProvider: ParentComponent = (props) => (
  <CounterProvider initial={1}>{props.children}</CounterProvider>
);
