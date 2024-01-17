import type { RouteDefinition } from "@solidjs/router";

const path = "/counter";

// import component from "./Component";
import { lazy } from "solid-js";
const component = lazy(() => import("./Component"));

const definition: RouteDefinition<typeof path> = { path, component };
export default definition;
