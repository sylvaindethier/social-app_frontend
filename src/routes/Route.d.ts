import type { Component } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";

export type RouteSectionComponent<T = unknown> = Component<
  RouteSectionProps<T>
>;

export type RouteInfoProps<T = unknown> = Omit<
  RouteSectionProps<T>,
  "children"
>;
export type RouteInfoComponent<T = unknown> = Component<RouteInfoProps<T>>;
