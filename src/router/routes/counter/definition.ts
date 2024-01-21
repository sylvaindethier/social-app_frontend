import type { RouteDefinition } from "@solidjs/router";

export const path = "/counter";

// import component from "./Component";
// // import { lazy } from "solid-js";
// // const component = lazy(() => import("./Component"));

import routeIndex from "./index/definition";
import routeDefault from "./default/definition";
import routeUseContext from "./use-context/definition";
const children: RouteDefinition[] = [routeIndex, routeDefault, routeUseContext];

const definition: RouteDefinition<typeof path> = {
  path,
  // component,
  children,
};
export default definition;
