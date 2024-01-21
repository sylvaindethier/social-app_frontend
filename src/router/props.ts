import type { RouterProps, RouteDefinition } from "@solidjs/router";

import root from "./Root";

// *** 404 NotFound *** //
import route404 from "./routes/404/definition";

// *** index Home *** //
import routeIndex from "./routes/index/definition";

// *** User *** //
import routeUser from "./routes/user/definition";

// *** Counter *** //
import routeCounter from "./routes/counter/definition";

// *** children routes *** //
const children: RouteDefinition[] = [
  // 404 NotFound
  route404,

  // index Home
  routeIndex,

  // User
  routeUser,

  // Counter
  routeCounter,
];

const props: RouterProps = { root, children };
export default props;
