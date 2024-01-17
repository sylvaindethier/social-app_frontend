import { createEffect, createRenderEffect } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";

function routeSectionJSON<T = unknown>(props: RouteSectionProps<T>) {
  const location = { ...props.location, query: { ...props.location.query } };
  const params = { ...props.params };
  const data = props.data ? { ...props.data } : undefined;

  return { location, params, data };
}

// type RouteDisplay = `<${string}>`;

export function debugRouteSectionProps<T = unknown>(
  display: `<${string}>`,
  props: RouteSectionProps<T>,
  { RenderEffect = false, Effect = true } = {}
) {
  if (RenderEffect) {
    createRenderEffect(() => {
      const message = `${display} RenderEffect`;
      console.debug(message, routeSectionJSON(props));
    });
  }
  if (Effect) {
    createEffect(() => {
      const message = `${display} Effect`;
      console.debug(message, routeSectionJSON(props));
    });
  }
}
