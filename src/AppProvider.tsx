import type { ParentComponent } from "solid-js";
import { ContextProviderCounter } from "#/components/Counter/ContextProviderCounter";

export const AppProvider: ParentComponent = (props) => (
  <ContextProviderCounter initial={1}>{props.children}</ContextProviderCounter>
);
