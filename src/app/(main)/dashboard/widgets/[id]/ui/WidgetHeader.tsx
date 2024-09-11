"use client";

import { Check, Code, Edit3Icon } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Tab, TabList, Tabs } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/constants";
import Routes from "@/utils/routes";

import EmbedCodeModal from "./EmbedCodeModal";
import WidgetDetailsDropdown from "./WidgetDetailsDropdown";

export default function WidgetHeader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setActiveModal } = useModalStore();
  const pathname = usePathname();
  const { id } = useParams();

  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState("30% Discount for New collections");

  const isCustomizePage = pathname === Routes.widget_detail_customize(id as string);
  const isSubmissionsPage = pathname === Routes.widget_detail_submission(id as string);
  const showContentTab = pathname.includes("/widgets/faq");
  const isContentPage = pathname === Routes.widget_detail_content(id as string);

  useEffect(() => {
    if (isEditable) inputRef.current?.focus();
  }, [isEditable]);

  return (
    <>
      <div className="bg-white dark:bg-bg-primary-dark border-b border-border-secondary dark:border-active-dark">
        <div className="flex items-center justify-between mx-auto md:px-8 px-4 py-4">
          <div className="w-full">
            <input
              ref={inputRef}
              disabled={!isEditable}
              className="focus-ring rounded-md bg-transparent text-primary-900 dark:text-primary-dark-900 text-xl leading-[30px] font-medium max-w-[356px] w-fit truncate mr-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <Button
              isDisabled={title.trim().length === 0}
              variant="link"
              className="hover:bg-secondary-light p-1.5 dark:hover:bg-secondary-dark inline-block"
              onPress={() => setIsEditable((p) => !p)}
            >
              {isEditable ? (
                <Check size={20} className={twMerge("text-brand-500", title.trim().length === 0 && "opacity-50")} />
              ) : (
                <Edit3Icon className="button-secondary-fg  dark:text-secondary-700" size={20} />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Tabs>
              <TabList
                aria-label="Input settings"
                className="flex items-center gap-1 text-sm font-semibold bg-disabled dark:bg-bg-primary-dark border border-border-secondary dark:border-active-dark p-[3px] rounded-lg"
              >
                <Tab
                  id="customize"
                  href={Routes.widget_detail_customize(id as string)}
                  className={twMerge(
                    "py-1.5 px-3 focus-ring rounded-md",
                    isCustomizePage && "bg-white dark:bg-secondary-dark shadow-sm"
                  )}
                >
                  <SimpleText color="secondary-700">Customize</SimpleText>
                </Tab>
                <Tab
                  href={
                    showContentTab
                      ? Routes.widget_detail_content(id as string)
                      : Routes.widget_detail_submission(id as string)
                  }
                  className={twMerge(
                    "py-1.5 px-3 focus-ring rounded-md",
                    (isSubmissionsPage || isContentPage) && "bg-white dark:bg-secondary-dark shadow-sm"
                  )}
                  id="submissions"
                >
                  {showContentTab ? "Content" : "Submissions"}
                </Tab>
              </TabList>
            </Tabs>
            <div className="flex gap-4">
              <Button
                variant="secondary"
                lefticon={<Code size={20} />}
                onPress={() => setActiveModal(Modals.embed_code)}
              >
                Get embed code
              </Button>
              <WidgetDetailsDropdown />
            </div>
          </div>
        </div>
      </div>
      <EmbedCodeModal />
    </>
  );
}
