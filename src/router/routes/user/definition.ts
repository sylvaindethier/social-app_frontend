import type { RouteDefinition } from "@solidjs/router";

export const path = "/user";

// import component from "./Component";
// // import { lazy } from "solid-js";
// // const component = lazy(() => import("./Component"));

// import routeIndex from "./index/definition";
import route_id from "./:id/definition";
const children: RouteDefinition[] = [
  // routeIndex,
  route_id,
];

const definition: RouteDefinition<typeof path> = {
  path,
  // component,
  children,
};
export default definition;
