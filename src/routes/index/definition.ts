import type { RouteDefinition } from "@solidjs/router";

const path = "/";

import component from "./Component";

const definition: RouteDefinition<typeof path> = { path, component };
export default definition;
