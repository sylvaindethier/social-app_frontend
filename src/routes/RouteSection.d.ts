import type { RouteSectionProps } from "@solidjs/router";
import type { Component } from "solid-js";

export type RouteSectionComponent<Data = unknown> = Component<
  RouteSectionProps<Data>
>;

export type RouteSectionInfoProps<Data = unknown> = Omit<
  RouteSectionProps<Data>,
  "children"
>;
export type RouteSectionInfoComponent<Data = unknown> = Component<
  RouteSectionInfoProps<Data>
>;
