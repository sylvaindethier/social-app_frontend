import type { Component, ParentComponent } from "solid-js";
import { A } from "@solidjs/router";

const TopNav: Component = () => (
  <nav id="TopNav">
    <ul>
      <li>
        <A href="/">Home</A>
      </li>

      <li>
        <A href="/register">Create User</A>
      </li>

      <li>
        <A href="/users">Users</A>
      </li>
      <li>
        <A href="/users/3">User with id 3</A>
      </li>
      <li>
        <A href="/users/999">User with id 999</A>
      </li>

      <li>
        <A href="/counter">Counter</A>
      </li>
      <li>
        <A href="/counter/default">CounterDefault</A>
      </li>
      <li>
        <A href="/counter/use-context">CounterUseContext</A>
      </li>

      <li>
        <A href="/no-exists">undefined path `404`</A>
      </li>
    </ul>
  </nav>
);

export const Layout: ParentComponent = (props) => (
  <>
    <TopNav />
    {props.children}
  </>
);
