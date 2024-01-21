import type { Component } from "solid-js";

// @DEBUG
import { debugProps } from "#/debug/debugProps";
const display = "<components/Home>";


export const Home: Component = (props) => {
  // @DEBUG
  debugProps(display, props);

  return (
    <div id="Home">
      <h1>Home</h1>
    </div>
  );
};
