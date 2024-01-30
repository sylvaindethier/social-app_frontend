import { Home } from "#/components/Home";
import type { RouteSectionComponent } from "#/routes/RouteSection";

// // @DEBUG
// import { debugRouteSectionProps } from "#/lib/debug/debugRouteSectionProps";
// const display = "<routes/index/Component>";

const RouteSection: RouteSectionComponent = (props) => {
  // // @DEBUG
  // debugRouteSectionProps(display, props);

  return (
    <>
      <Home />
      <pre>{"<Home />"} props.children</pre>
      {props.children}
    </>
  );
};
export default RouteSection;
