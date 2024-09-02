"use client";

import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Heading } from "react-aria-components";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <main className="bg-white dark:bg-bg-primary-dark h-dvh flex justify-center items-center bg-404-light-bg dark:bg-404-dark-bg bg-no-repeat bg-[center_top]">
      <div className="max-w-[768px] mx-auto text-center">
        <div className="bg-white dark:bg-bg-primary-dark dark:border-border-dark-primary border border-border-secondary p-[13px] rounded-lg mb-6 w-fit mx-auto">
          <Search size={28} />
        </div>
        <Heading className="mb-6 sm:text-[60px] sm:leading-[72px] text-[30px] leading-[38px] font-semibold text-primary-900 dark:text-primary-dark-900">
          Page not found
        </Heading>
        <SimpleText className="sm:text-xl text-lg sm:mb-[50px] mb-12 text-tertiary-600 dark:text-tertiary-dark-600 max-sm:max-w-[254px]">
          The page you are looking for doesn't exist.
        </SimpleText>
        <div className="flex gap-3 justify-center">
          <Button
            className="text-base"
            variant="secondary"
            lefticon={<ArrowLeft size={20} />}
            onPress={() => router.back()}
          >
            Go back
          </Button>
          <Link href={"/"}>
            <Button className="text-base">Take me home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
