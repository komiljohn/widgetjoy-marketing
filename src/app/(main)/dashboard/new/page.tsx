"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Heading } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import Routes from "@/utils/routes";

import { CardSvg } from "../../../../../public/icons";
import { widgets } from "../fakeData";

export default function Page() {
  const router = useRouter();

  return (
    <div className="container px-4 mx-auto pt-[54px] pb-[144px]">
      <section className="flex max-md:flex-col justify-between mb-6">
        <Link href="/" tabIndex={-1} className="md:hidden">
          <Button textColor="text-disabled" className="w-fit mb-4" variant="link" lefticon={<ArrowLeft size={20} />}>
            Back to dashboard
          </Button>
        </Link>
        <div className="max-md:mb-4">
          <Heading className="text-2xl font-semibold text-primary-900 dark:text-primary-dark-900 mb-1">
            Create new widget
          </Heading>
          <SimpleText className="dark:text-secondary-700 text-button-secondary-fg text-lg" weight="font-medium">
            Please select your desired widget below.
          </SimpleText>
        </div>
        <div className="flex gap-4">
          <Link href="/" tabIndex={-1} className="max-md:hidden">
            <Button variant="secondary" lefticon={<ArrowLeft size={20} />}>
              Back to dashboard
            </Button>
          </Link>
          <Button className="max-sm:w-full" variant="secondary" onPress={() => router.push(Routes.dashboard_new)}>
            Submit request
          </Button>
        </div>
      </section>
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {widgets.map((item, idx) => (
          <article
            key={idx}
            className="border border-border-primary rounded-3xl shadow-xs dark:border-border-dark-primary h-fit"
          >
            <div
              className={twMerge(
                "h-[294px] relative overflow-hidden flex justify-center lg:pt-[63px] pt-[60px]",
                item.isCentered && "items-center pt-0"
              )}
            >
              <CardSvg className="stroke-border-secondary dark:stroke-active-dark absolute -z-[1] top-0 w-full object-fill" />
              {item.component}
            </div>
            <div className="px-[15px] py-[19px] border-t border-border-secondary rounded-b-3xl bg-white dark:bg-bg-primary-dark dark:border-active-dark">
              <SimpleText color="primary-900" className="text-xl mb-1" weight="font-medium">
                {item.title}
              </SimpleText>
              <SimpleText color="quaternary-500" className="mb-4">
                {item.subtitle}
              </SimpleText>
              <Link href={Routes.widget_detail(item.id)} tabIndex={-1}>
                <Button variant="secondary" className="w-full">
                  Get it & customize
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
