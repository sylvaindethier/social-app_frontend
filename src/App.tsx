import { Router } from "@solidjs/router";
import { routes } from "#/routes/routes";
import type { Component } from "solid-js";
import type { RouteSectionComponent } from "#/routes/RouteSection";

import { AppLayout } from "./AppLayout";
import { AppProvider } from "./AppProvider";
const Root: RouteSectionComponent = (props) => (
  <AppProvider>
    <AppLayout>{props.children}</AppLayout>
  </AppProvider>
);

export const App: Component = () => <Router root={Root}>{routes}</Router>;
