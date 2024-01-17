// import type { RouteSectionComponent } from "../Route";
import type { RouteSectionComponent } from "@/routes/Route";

// import { Home } from "../../components/Home";
import { Home } from "@/components/Home";

// // @DEBUG
// import { debugRouteSectionProps } from "../debug";
// const display = "<routes/index/Component>";

const SectionComponent: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  return (
    <>
      <Home />
      {props.children}
    </>
  );
};
export default SectionComponent;
