import type { RouteSectionComponent } from "../Route";

import { Counter } from "../../components/Counter/Counter";
// import { Counter } from "@/components/Counter/Counter";

const SectionComponent: RouteSectionComponent = () => <Counter initial={0} />;
export default SectionComponent;
