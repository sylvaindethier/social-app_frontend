import type {
  RouteSectionComponent,
  RouteSectionInfoComponent,
} from "#/routes/RouteSection";

const NotFound: RouteSectionInfoComponent = (props) => (
  <div id="NotFound">
    <h3>Page non trouvée</h3>
    <div>
      Il n'y a rien ici <code>{props.location.pathname}</code>
    </div>
  </div>
);

// // @DEBUG
// import { debugRouteSectionProps } from "#/lib/debug/debugRouteSectionProps";
// const display = "<routes/404/Component>";

const RouteSection: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  return (
    <>
      <NotFound {...props} />
      {/* {props.children} */}
    </>
  );
};
export default RouteSection;
