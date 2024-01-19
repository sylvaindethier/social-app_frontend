import type { Component, ParentComponent } from "solid-js";
import { A } from "@solidjs/router";

import { path as pathIndex } from "#/router/index/definition";
/** Counter */
import { path as pathCounterDefault } from "#/domains/Counter/routes/default/definition";
import { path as pathCounterIndex } from "#/domains/Counter/routes/index/definition";
import { path as pathCounterUseContext } from "#/domains/Counter/routes/use-context/definition";
/** User */

const TopNav: Component = () => (
  <nav id="TopNav">
    <ul>
      <li>
        <A href={pathIndex}>Home</A>
      </li>
      <li>
        <A href={pathCounterDefault}>CounterDefault</A>
      </li>
      <li>
        <A href={pathCounterIndex}>CounterIndex</A>
      </li>
      <li>
        <A href={pathCounterUseContext}>CounterUseContext</A>
      </li>
      <li>
        <A href="/users/create">CreateUser</A>
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
