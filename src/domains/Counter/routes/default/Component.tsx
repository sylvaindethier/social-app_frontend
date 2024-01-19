import type { RouteSectionComponent } from "#/router/RouteSection";

import { CounterDefault } from "./CounterDefault";

const SectionComponent: RouteSectionComponent = () => <CounterDefault initial={0}/>;
export default SectionComponent;
