import type { RouteDefinition } from "@solidjs/router";

const path = "/:id";

// import component from "./Component";
import { lazy } from "solid-js";
const component = lazy(() => import("./Component"));

const definition: RouteDefinition<typeof path> = { path, component };
export default definition;
