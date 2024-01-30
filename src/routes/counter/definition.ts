import type { RouteDefinition } from "@solidjs/router";

export const path = "/counter";

import routeIndex from "./index/definition";
import routeDefault from "./default/definition";
import routeUseContext from "./use-context/definition";
const children: RouteDefinition[] = [routeIndex, routeDefault, routeUseContext];

const definition: RouteDefinition<typeof path> = { path, children };
export default definition;
