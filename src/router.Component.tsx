import type { RouteSectionComponent } from "./routes/Route";

import { AppProvider } from "./AppProvider";
import { AppLayout } from "./AppLayout";

// // @DEBUG
// import { debugRouteSectionProps } from "./routes/debug";

const SectionComponent: RouteSectionComponent = (props) => {
  // // @DEBUG
  // const display = "<router.Component>";
  // debugRouteSectionProps(display, props);

  return (
    <AppProvider>
      <AppLayout>{props.children}</AppLayout>
    </AppProvider>
  );
};
export default SectionComponent;
