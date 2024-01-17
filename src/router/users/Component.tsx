import type { RouteSectionComponent } from "#/router/RouteSection";

// // @DEBUG
// import { debugRouteSectionProps } from "#/router/debug";
// const display = "<router/users/Component>";

const SectionComponent: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  return (
    <>
      {props.children}
    </>
  );
};
export default SectionComponent;
