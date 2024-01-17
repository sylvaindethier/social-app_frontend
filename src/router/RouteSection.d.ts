import type { Component } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";

export type RouteSectionComponent<T = unknown> = Component<
  RouteSectionProps<T>
>;

export type RouteSectionInfoProps<T = unknown> = Omit<
  RouteSectionProps<T>,
  "children"
>;
export type RouteSectionInfoComponent<T = unknown> = Component<RouteSectionInfoProps<T>>;
