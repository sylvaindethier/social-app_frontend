import type { RouteSectionComponent } from "../../Route";

const SectionComponent: RouteSectionComponent = (props) => {
  return (
    <div id="UsersIndex">
      <h2>UsersIndex</h2>
      {props.children}
    </div>
  );
};
export default SectionComponent;
