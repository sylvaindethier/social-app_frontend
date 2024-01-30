import { createSignalCounter } from "./createSignalCounter";
import solidLogo from "#/assets/solid.svg";
import viteLogo from "/vite.svg";
import "./style.css";
import type { Component } from "solid-js";
import type { CounterProps } from "./types";

// // @DEBUG
// import { debugProps } from "#/lib/debug/debugProps";
// const display = "<components/Counter/CounterDefault>";

export const CounterDefault: Component<CounterProps> = (props) => {
  // // @DEBUG
  // debugProps(display, props);

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
          counter is {getCounter()}
        </button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  );
};
