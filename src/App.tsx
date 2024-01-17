// *** 404 NotFound *** //
import route404 from "./routes/404/definition";

// *** index Home *** //
import routeIndex from "./routes/index/definition";

// *** Counter *** //
import routeCounter from "./routes/counter/definition";
import routeUseCounter from "./routes/use-counter/definition";

// *** Users *** //
import routeUsers from "./routes/users/definition";

// *** routes *** //
import type { RouteDefinition } from "@solidjs/router";
const routes: RouteDefinition[] = [
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

// *** App (routes as config) *** //
import { Router } from "@solidjs/router";
import type { RouterProps } from "@solidjs/router";
import root from "./router.Component";
const router: RouterProps = { root };

export function App() {
  return <Router {...router}>{routes}</Router>;
}
