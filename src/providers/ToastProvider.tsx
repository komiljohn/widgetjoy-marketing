"use client";

import { ToastQueue, useToastQueue } from "@react-stately/toast";
import { createPortal } from "react-dom";

import { MyToast } from "@/components/ui/toast/Toast";
import ToastRegion from "@/components/ui/toast/ToastRegion";

export const toastQueue = new ToastQueue<MyToast>({
  maxVisibleToasts: 5,
});

type Props = object;

export function GlobalToastRegion(props: Props) {
  // Subscribe to it.
  const state = useToastQueue<MyToast>(toastQueue);

  // Render toast region.
  return state.visibleToasts.length > 0 ? createPortal(<ToastRegion {...props} state={state} />, document.body) : null;
}
