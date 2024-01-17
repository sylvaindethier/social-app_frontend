import type { RouteSectionComponent } from "#/router/RouteSection";

import { AppProvider } from "#/AppProvider";
import { AppLayout } from "#/AppLayout";

// @DEBUG
import { debugRouteSectionProps } from "#/router/debug";
const display = "<router.Component>";

const SectionComponent: RouteSectionComponent = (props) => {
  // @DEBUG
  debugRouteSectionProps(display, props);

  return (
    <AppProvider>
      <AppLayout>{props.children}</AppLayout>
    </AppProvider>
  );
};
export default SectionComponent;
