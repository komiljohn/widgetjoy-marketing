"use client";

import { Plus } from "lucide-react";
import React from "react";
import { Heading } from "react-aria-components";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";

import { widgets } from "./fakeData";

export default function Dashboard() {
  return (
    <div className="container px-4 mx-auto pt-[54px]">
      <div className="flex items-center justify-between mb-6">
        <Heading className="text-2xl font-medium text-primary-900 dark:text-primary-dark-900">Dashboard</Heading>
        <Button className="w-fit" leftIcon={<Plus size={20} />}>
          Add new widget
        </Button>
      </div>
      <div>
        <SimpleText className="text-lg mb-[18px] text-tertiary-600 dark:text-tertiary-dark-600" weight="font-medium">
          Dynamic widgets
        </SimpleText>
        <div className="grid grid-cols-3 gap-6">
          {widgets.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xs p-6 rounded-xl border border-border-secondary dark:bg-bg-primary-dark dark:border-active-dark"
            >
              <div className="mb-6 flex flex-wrap gap-2 font-semibold">
                <SimpleText className="dark:text-primary-dark-900" color="text-primary-900">
                  Title
                </SimpleText>
                <SimpleText className="text-text-disabled whitespace-nowrap dark:text-tertiary-dark-600">
                  {item.title}
                </SimpleText>
              </div>
              <Button className="w-fit" variant="secondary">
                See widget
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
