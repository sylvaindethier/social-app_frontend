import type { RouterProps, RouteDefinition } from "@solidjs/router";

import root from "./Root";

// *** 404 NotFound *** //
import route404 from "#/router/404/definition";

// *** index Home *** //
import routeIndex from "#/router/index/definition";

// *** Counter *** //
import routeCounter from "#/router/counter/definition";
import routeUseCounter from "#/router/use-counter/definition";

// *** Users *** //
import routeUsers from "#/router/users/definition";

// *** routes *** //
const children: RouteDefinition[] = [
  // 404 NotFound
  route404,

  // index Home
  routeIndex,

  // Counter
  routeCounter,
  routeUseCounter,

  // /users
  routeUsers,
];


const props: RouterProps = { root, children };
export default props;
