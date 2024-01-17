import type { Component, ParentComponent } from "solid-js";

// const paths = {
//   Home: "/",
//   Counter: "/counter",
//   UseCounter: "/use-counter",
// };

const TopNav: Component = () => (
  <nav id="TopNav">
    <ul>
      <li>
        <a href={"/"}>Go to Home path</a>
      </li>
      <li>{/* <a href={props.path_CreateUser}>Go to CreateUser path</a> */}</li>
      <li>
        <a href={"/counter"}>Go to Counter path</a>
      </li>
      <li>
        <a href={"/use-counter"}>Go to UseCounter path</a>
      </li>
      <li>
        <a href={"/no-exists"}>Go to NoExists path (should be CatchAll404)</a>
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
