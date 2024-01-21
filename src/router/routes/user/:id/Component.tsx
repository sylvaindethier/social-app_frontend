import type { RouteSectionComponent } from "#/router/RouteSection";
import UserUse_id from "./User_useParams";

// @DEBUG
import { debugRouteSectionProps } from "#/debug/debugRouteSectionProps";
const display = "<domains/User/routes/id/Component>";

const RouteComponent: RouteSectionComponent = (props) => {
  // @DEBUG
  debugRouteSectionProps(display, { ...props });

  return <UserUse_id />;
};
export default RouteComponent;
