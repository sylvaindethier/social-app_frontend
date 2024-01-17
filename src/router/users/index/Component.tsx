import type { RouteSectionComponent } from "#/router/RouteSection";

// // @DEBUG
// import { debugRouteSectionProps } from "#/router/debug";
// const display = "<router/users/index/Component>";

const SectionComponent: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  return (
    <div id="UsersIndex">
      <h2>UsersIndex</h2>
      {props.children}
    </div>
  );
};
export default SectionComponent;
