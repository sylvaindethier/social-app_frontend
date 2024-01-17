import { createSignal } from "solid-js";
import type { Component } from "solid-js";
import solidLogo from "#/assets/solid.svg";
import viteLogo from "/vite.svg";
import "./style.css";

export const CounterDefault: Component = () => {
  const [getCount, setCount] = createSignal(0);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {getCount()}
        </button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  );
};