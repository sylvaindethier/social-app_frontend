import type { RouteSectionComponent } from "../Route";

// // @DEBUG
// import { debugRouteSectionProps } from "../debug";
// const display = "<routes/users/Component>";

const SectionComponent: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  return (
    <>
      {props.children}
    </>
  );
};
export default SectionComponent;
