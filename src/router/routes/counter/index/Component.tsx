import type { RouteSectionComponent } from "#/router/RouteSection";

import { Counter } from "#/components/Counter/Counter";

const RouteComponent: RouteSectionComponent = () => <Counter initial={0} />;
export default RouteComponent;
