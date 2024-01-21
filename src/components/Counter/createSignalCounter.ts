import { createSignal } from "solid-js";
import type { Value } from "./types";

export const createSignalCounter = (value: Value = 0) => createSignal<Value>(value);
