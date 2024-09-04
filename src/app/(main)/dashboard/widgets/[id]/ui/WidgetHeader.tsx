"use client";

import { Code, Edit3Icon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/constants";

import EmbedCodeModal from "./EmbedCodeModal";
import WidgetDetailsDropdown from "./WidgetDetailsDropdown";

export default function WidgetHeader() {
  const { setActiveModal } = useModalStore();

  return (
    <>
      <div className="bg-white dark:bg-bg-primary-dark border-b border-border-secondary dark:border-active-dark">
        <div className="flex items-center justify-between mx-auto md:px-8 px-4 py-4">
          <SimpleText className="flex items-center gap-2">
            <SimpleText color="primary-900" weight="font-medium" className="text-xl leading-[30px]" tag="span">
              30% Discount for New collections
            </SimpleText>
            <Edit3Icon className="button-secondary-fg  dark:text-secondary-700" size={20} />
          </SimpleText>
          <div className="flex gap-4">
            <Button variant="secondary" lefticon={<Code size={20} />} onPress={() => setActiveModal(Modals.embed_code)}>
              Get embed code
            </Button>
            <WidgetDetailsDropdown />
          </div>
        </div>
      </div>
      <EmbedCodeModal />
    </>
  );
}
