import type { ParentComponent } from "solid-js";

import { ContextProviderCounter } from "#/components/Counter/ContextProviderCounter";
export const Provider: ParentComponent = (props) => (
  <ContextProviderCounter initial={1}>{props.children}</ContextProviderCounter>
);
