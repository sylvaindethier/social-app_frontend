import { createSignal } from "solid-js";
import type { CounterValue } from "./types";

export const createSignalCounter = (value: CounterValue = 0) =>
  createSignal<CounterValue>(value);
