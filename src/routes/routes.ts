import type { RouteDefinition } from "@solidjs/router";

// *** 404 NotFound *** //
import route404 from "./404/definition";

// *** index Home *** //
import routeIndex from "./index/definition";

// *** User *** //
import routeUser from "./user/definition";

// *** Counter *** //
import routeCounter from "./counter/definition";

// *** routes *** //
export const routes: RouteDefinition[] = [
  // 404 NotFound
  route404,

  // index Home
  routeIndex,

  // User
  routeUser,

  // Counter
  routeCounter,
];
