import type {Component} from "solid-js";
import { Router } from "@solidjs/router";
import props from "./props";

export const RouterComponent: Component = () => <Router {...props} />;

