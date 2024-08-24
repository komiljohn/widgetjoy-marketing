import { useToast } from "@react-aria/toast";
import { QueuedToast, ToastState } from "@react-stately/toast";
import { X } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

import { CheckCirclesSvg } from "../../../../public/icons";
import { SimpleText } from "../typography";

export interface MyToast {
  title: string;
  description: string;
}

interface ToastProps {
  state: ToastState<MyToast>;
  toast: QueuedToast<MyToast>;
}

export default function Toast({ state, ...props }: ToastProps) {
  const ref = useRef(null);
  const { toastProps, contentProps, titleProps, closeButtonProps } = useToast<MyToast>(props, state, ref);

  return (
    <div
      {...toastProps}
      ref={ref}
      className="flex justify-between gap-2 bg-white border border-border-primary dark:border-border-dark-primary rounded-xl relative min-w-[260px] shadow-popup sm:max-w-[400px] max-w-[300px] dark:bg-secondary-dark"
    >
      <div className="flex gap-[7px]">
        <CheckCirclesSvg className="min-w-9 mt-1.5 ml-1.5" />
        <div className="mt-[15px]" {...contentProps}>
          <div {...titleProps}>
            <SimpleText color="primary-900" className="mb-1 text-sm" weight="font-semibold">
              {props.toast.content?.title ?? props.toast.content}
            </SimpleText>
            <SimpleText color="secondary-700" className="mb-[15px] text-sm">
              {props.toast.content?.description}
            </SimpleText>
          </div>
        </div>
      </div>
      <Button variant="link" className="shadow-none mt-[15px] mr-[15px]" {...closeButtonProps}>
        <X color="#98A2B3" size={20} />
      </Button>
    </div>
  );
}
