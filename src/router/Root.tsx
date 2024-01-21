import type { RouteSectionComponent } from "#/router/RouteSection";

import { Provider } from "./Provider";
import { Layout } from "./Layout";

// // @DEBUG
// import { debugRouteSectionProps } from "#/debug/debugRouteSectionProps";
// const display = "<router/Root>";

const RouteComponent: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  return (
    <Provider>
      <Layout>{props.children}</Layout>
    </Provider>
  );
};
export default RouteComponent;
