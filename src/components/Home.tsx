import { A } from "@solidjs/router";
import type { Component } from "solid-js";

// // @DEBUG
// import { debugProps } from "./debug";

export const Home: Component = () => {
  // // @DEBUG
  // const display = "<components/Home>";
  // debugProps(display, props, { RenderEffect: true });

  return (
    <div id="Home">
      <h1>Home</h1>
      <div>Home component</div>
      <nav>
        <ul>
          <li>
            <A href="/users">Users</A>
          </li>
          <li>
            <A href="/users/">Users/</A>
          </li>
          <li>
            <A href="/users/3">UserWithParams_id 3</A>
          </li>
        </ul>
      </nav>
    </div>
  );
};
