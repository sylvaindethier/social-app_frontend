import type { RouteSectionComponent } from "#/routes/RouteSection";

import { CounterDefault } from "#/components/Counter/CounterDefault";

const RouteSection: RouteSectionComponent = () => (
  <CounterDefault initial={0} />
);
export default RouteSection;
