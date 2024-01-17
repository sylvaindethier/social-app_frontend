import type { RouteSectionComponent } from "#/router/RouteSection";

// // @DEBUG
// import { debugRouteSectionProps } from "#/router/debug";
// const display = "<router/index/Component>";

import { Home } from "#components/Home";

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
