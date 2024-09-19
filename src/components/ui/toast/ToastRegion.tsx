import { useToastRegion } from "@react-aria/toast";
import type { ToastState } from "@react-stately/toast";
import { useRef } from "react";

import Toast, { MyToast } from "./Toast";

interface ToastRegionProps {
  state: ToastState<MyToast>;
}

export default function ToastRegion({ state, ...props }: ToastRegionProps) {
  const ref = useRef(null);
  const { regionProps } = useToastRegion(props, state, ref);

  return (
    <div {...regionProps} ref={ref} className="fixed top-6 right-6 flex flex-col gap-2 z-[1000]">
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}
