"use client";

import { X } from "lucide-react";
import React, { ReactNode } from "react";
import { Dialog, Modal as AriaModal, ModalOverlay, ModalOverlayProps } from "react-aria-components";
import { tv } from "tailwind-variants";

import { Button } from "../button";

interface Props extends ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  ariaLabel: string;
}

const overlayStyles = tv({
  base: "fixed top-0 left-0 w-full h-dvh isolate z-20 bg-bg-overlay dark:bg-active-dark bg-opacity-70 dark:bg-opacity-70 flex items-center justify-center p-4 text-center backdrop-blur-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out",
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in",
    },
  },
});

const modalStyles = tv({
  base: "w-full max-w-md max-h-full rounded-2xl bg-white dark:bg-bg-primary-dark dark:backdrop-blur-2xl dark:backdrop-saturate-200 text-left align-middle bg-clip-padding relative",
  variants: {
    isEntering: {
      true: "animate-in zoom-in-105 ease-out duration-200",
    },
    isExiting: {
      true: "animate-out zoom-out-95 ease-in duration-200",
    },
  },
});

export default function Modal({ isOpen, onClose, children, ...props }: Props) {
  return (
    <ModalOverlay isOpen={isOpen} onOpenChange={onClose} {...props} className={overlayStyles}>
      <AriaModal isDismissable {...props} className={modalStyles}>
        <Button variant="link" onPress={onClose} className="shadow-none absolute top-6 right-6 z-10">
          <X color="#98A2B3" />
        </Button>
        <Dialog aria-label={props.ariaLabel} className="outline-none">
          {children}
        </Dialog>
      </AriaModal>
    </ModalOverlay>
  );
}
