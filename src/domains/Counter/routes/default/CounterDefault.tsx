import type { Component } from "solid-js";
import solidLogo from "#/assets/solid.svg";
import viteLogo from "/vite.svg";
import "./style.css";
import type { Props } from "#/domains/Counter/types";
import { createSignalCounter } from "#/domains/Counter/createSignalCounter";

// @DEBUG
import { debugProps } from "#/debug/debugProps";
const display = "<domains/Counter/routes/default/CounterDefault>";

export const CounterDefault: Component<Props> = (props) => {
  // @DEBUG
  debugProps(display, props);

  const [getCounter, setCounter] = createSignalCounter(props.initial);

  return (
    <div id="CounterDefault">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCounter((counter) => counter + 1)}>
          count is {getCounter()}
        </button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  );
};
