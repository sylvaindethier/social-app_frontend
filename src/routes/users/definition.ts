import type { RouteDefinition } from "@solidjs/router";

const path = "/users";

import component from "./Component";
// import { lazy } from "solid-js";
// const component = lazy(() => import("./Component"));

import routeIndex from "./index/definition";
import routeId from "./id/definition";

const definition: RouteDefinition<typeof path> = {
  path,
  component,
  children: [
    // UsersIndex
    routeIndex,

    // UserId
    routeId,
  ],
};
export default definition;
