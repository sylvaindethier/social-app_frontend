import type { RouterProps, RouteDefinition } from "@solidjs/router";

import root from "./Root";

// *** 404 NotFound *** //
import route404 from "#/router/404/definition";

// *** index Home *** //
import routeIndex from "#/router/index/definition";

// *** Counter *** //
import routeCounterIndex from "#/domains/Counter/routes/index/definition";
import routeCounterDefault from "#/domains/Counter/routes/default/definition";
import routeCounterUseContext from "#/domains/Counter/routes/use-context/definition";

// *** Users *** //
import routeUsers from "#/domains/User/routes/definition";

// *** routes *** //
const children: RouteDefinition[] = [
  // 404 NotFound
  route404,

  // index Home
  routeIndex,

  // Counter
  routeCounterIndex,
  routeCounterDefault,
  routeCounterUseContext,

  // /users
  routeUsers,
];


const props: RouterProps = { root, children };
export default props;
