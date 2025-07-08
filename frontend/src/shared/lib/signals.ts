import { signal } from "@preact/signals-react";

export const createSignal = <T>(initialValue: T) => {
  const s = signal(initialValue);
  return {
    get value() { return s.value },
    set value(v: T) { s.value = v },
  };
};
// я искренне не люблю это