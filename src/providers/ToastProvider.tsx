"use client";

import { X } from "lucide-react";
import React from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";

import { SimpleText } from "@/components/ui/typography";

import { CheckCirclesSvg } from "../../public/icons";

export default function ToastProvider() {
  return (
    <Toaster>
      {(t) => (
        <ToastBar toast={t}>
          {({ message }) => (
            <div
              className="border-border-primary rounded-xl flex items-center gap-0.5 relative"
              style={{ paddingRight: "44px", minWidth: "200px" }}
            >
              <CheckCirclesSvg />
              <div>
                <SimpleText className="text-button-secondary-fg mb-3 font-semibold">{message}</SimpleText>
              </div>

              {t.type !== "loading" && (
                <X
                  onClick={() => toast.dismiss(t.id)}
                  color="#98A2B3"
                  size={20}
                  className="absolute cursor-pointer"
                  style={{ right: "6px", top: "8px" }}
                />
              )}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
