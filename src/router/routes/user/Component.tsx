import type { RouteSectionComponent } from "#/router/RouteSection";

// // @DEBUG
// import { debugRouteSectionProps } from "#/debug/debugRouteSectionProps";
// const display = "<router/routes/user/Component>";

const RouteComponent: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  return (
    <>
      {props.children}
    </>
  );
};
export default RouteComponent;
