import type { RouteSectionComponent } from "#/router/RouteSection";
import { Home } from "#/components/Home";

// @DEBUG
import { debugRouteSectionProps } from "#/debug/debugRouteSectionProps";
const display = "<router/routes/Component>";

const RouteComponent: RouteSectionComponent = (props) => {
  // @DEBUG
  debugRouteSectionProps(display, props);

  return (
    <>
      <Home />
      {props.children}
    </>
  );
};
export default RouteComponent;
