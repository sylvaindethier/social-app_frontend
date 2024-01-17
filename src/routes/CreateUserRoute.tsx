import type { Component } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";

const CreateUser: Component = () => (
  <>
    <h1 id="CreateUser">Créer un utilisateur</h1>
    <div>CreateUser component</div>
  </>
);

export const CreateUserRoute: Component<RouteSectionProps> = () => (
  <CreateUser />
);

export default CreateUserRoute;
