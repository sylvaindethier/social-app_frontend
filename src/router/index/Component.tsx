import type { RouteSectionComponent } from "#/router/RouteSection";
import { Home } from "./Home";

// // @DEBUG
// import { debugRouteSectionProps } from "#/debug/debugRouteSectionProps";
// const display = "<router/index/Component>";

const SectionComponent: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  return (
    <>
      <Home />
      {props.children}
    </>
  );
};
export default SectionComponent;
