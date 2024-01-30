import { createEffect, createRenderEffect } from "solid-js";

export function debugProps<P = {}>(
  display: `<${string}>`,
  props: P,
  { RenderEffect = false, Effect = true } = {}
) {
  if (RenderEffect) {
    createRenderEffect(() => {
      const message = `${display} RenderEffect`;
      console.debug(message, props);
    });
  }
  if (Effect) {
    createEffect(() => {
      const message = `${display} Effect`;
      console.debug(message, props);
    });
  }
}
