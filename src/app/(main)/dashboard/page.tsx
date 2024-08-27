"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Heading } from "react-aria-components";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import Routes from "@/utils/routes";

import { widgets } from "./fakeData";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="container px-4 mx-auto pt-[54px] pb-12">
      <div className="flex items-center justify-between mb-6">
        <Heading className="text-2xl font-medium text-primary-900 dark:text-primary-dark-900">Dashboard</Heading>

        <Link href={Routes.dashboard_new} tabIndex={-1}>
          <Button className="max-md:hidden" leftIcon={<Plus size={20} />}>
            Add new widget
          </Button>
          <Button className="md:hidden" isIcon onPress={() => router.push(Routes.dashboard_new)}>
            <Plus size={20} />
          </Button>
        </Link>
      </div>
      <div>
        <SimpleText className="text-lg mb-[18px] text-tertiary-600 dark:text-tertiary-dark-600" weight="font-medium">
          Dynamic widgets
        </SimpleText>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {widgets.map((item, idx) => (
            <div
              key={idx}
              className="bg-white h-fit shadow-xs p-6 rounded-xl border border-border-secondary dark:bg-bg-primary-dark dark:border-active-dark"
            >
              <div className="mb-6 flex flex-wrap gap-2 font-semibold">
                <SimpleText color="primary-900">Title</SimpleText>
                <SimpleText className="whitespace-nowrap" color="quaternary-500">
                  {item.title}
                </SimpleText>
              </div>
              <Button variant="secondary">See widget</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
