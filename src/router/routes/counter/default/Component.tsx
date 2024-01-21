import type { RouteSectionComponent } from "#/router/RouteSection";

import { CounterDefault } from "#/components/Counter/CounterDefault";

const RouteComponent: RouteSectionComponent = () => (
  <CounterDefault initial={0} />
);
export default RouteComponent;
