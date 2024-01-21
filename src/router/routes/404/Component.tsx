import type { RouteSectionComponent, RouteSectionInfoComponent } from "#/router/RouteSection";

const NotFound: RouteSectionInfoComponent = (props) => (
  <div id="NotFound">
    <h3>Page non trouvée</h3>
    <div>
      Il n'y a rien ici <pre>{props.location.pathname}</pre>
    </div>
  </div>
);

// @DEBUG
import { debugRouteSectionProps } from "#/debug/debugRouteSectionProps";
const display = "<router/404/Component>";

const RouteComponent: RouteSectionComponent = (props) => {
  // @DEBUG
  debugRouteSectionProps(display, props);

  return (
    <>
      <NotFound {...props} />
      {/* {props.children} */}
    </>
  );
};
export default RouteComponent;
