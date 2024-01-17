import type { RouteSectionComponent } from "../../Route";

// // @DEBUG
// import { debugRouteSectionProps } from "../../debug";
// const display = "<routes/users/id/Component>";

import { useParams } from "@solidjs/router";
const SectionComponent: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  // `params` is already in props
  const params = useParams();
  const id = params.id;

  return (
    <div id="UserId">
      <h2>users / id</h2>
      <div>User id:{id}</div>
      {props.children}
    </div>
  );
};
export default SectionComponent;
