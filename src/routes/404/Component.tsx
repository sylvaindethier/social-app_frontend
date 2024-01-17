import type { RouteSectionComponent, RouteInfoComponent } from "../Route";

const NotFound: RouteInfoComponent = (props) => (
  <div id="NotFound">
    <h3>Page non trouvée</h3>
    <div>
      Il n'y a rien ici <pre>{props.location.pathname}</pre>
    </div>
  </div>
);

// @DEBUG
import { debugRouteSectionProps } from "../debug";
const display = "<routes/404/Component>";

const SectionComponent: RouteSectionComponent = (props) => {
  // @DEBUG
  debugRouteSectionProps(display, props);

  return (
    <>
      <NotFound {...props} />
      {props.children}
    </>
  );
};
export default SectionComponent;
