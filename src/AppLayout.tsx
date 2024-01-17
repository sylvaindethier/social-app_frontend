import type { Component, ParentComponent } from "solid-js";
import { A } from "@solidjs/router";

const TopNav: Component = () => (
  <nav id="TopNav">
    <ul>
      <li>
        <A href="/">Home</A>
      </li>
      <li>
        <A href="/users/create">CreateUser</A>
      </li>
      <li>
        <A href="/counter">Counter</A>
      </li>
      <li>
        <A href="/use-counter">UseCounter</A>
      </li>
      <li>
        <A href="/no-exists">undefined path `404`</A>
      </li>
    </ul>
  </nav>
);

export const AppLayout: ParentComponent = (props) => (
  <>
    <div>AppLayout</div>
    <TopNav />
    {props.children}
  </>
);
