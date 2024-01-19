import type { ParentComponent } from "solid-js";

import { ContextProviderCounter } from "#/domains/Counter/ContextProviderCounter";
export const AppProvider: ParentComponent = (props) => (
  <ContextProviderCounter initial={1}>{props.children}</ContextProviderCounter>
);
