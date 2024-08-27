"use client";

import { Check } from "lucide-react";
import { Radio, RadioGroup } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MyLink from "@/components/ui/button/my-link";
import Card from "@/components/ui/cards";
import Divider from "@/components/ui/divider";
import { SimpleText } from "@/components/ui/typography";

import { tariffs } from "../fakeData";

export default function BillingPage() {
  return (
    <div className="max-w-[864px] mx-auto bg-white dark:bg-bg-primary-dark shadow-xs border border-bg-disabled dark:border-border-dark-primary rounded-lg sm:p-6 p-4">
      <div className="flex justify-between gap-2">
        <div className="space-y-1">
          <SimpleText color="primary-900" weight="font-semibold" className="text-lg">
            Manage plans
          </SimpleText>
          <SimpleText className="text-sm">
            <SimpleText tag="span" color="tertiary-600">
              Your team is charged on a monthly basis and renews on{" "}
            </SimpleText>
            <SimpleText tag="span" color="primary-900" weight="font-medium">
              Aug 28th, 2024.
            </SimpleText>
          </SimpleText>
          <SimpleText className="text-sm">
            <SimpleText color="tertiary-600" tag="span">
              See your{" "}
            </SimpleText>
            <MyLink href="#">Billing Overview here.</MyLink>
          </SimpleText>
        </div>
        <Button variant="secondary" isDisabled>
          Switch to Yearly
        </Button>
      </div>
      <Divider className="mt-5 mb-6" />
      <RadioGroup name="tariff" defaultValue="1" aria-label="tariff plans">
        {tariffs.map((item) => (
          <Radio key={item.id} value={String(item.id)}>
            {({ isSelected }) => (
              <Card
                color={item.isFree ? "secondary" : "primary"}
                className={twMerge(
                  "flex gap-3 focus-ring mb-6",
                  isSelected && "border-brand-600 shadow-[0_0_0_1px_#f02e06]"
                )}
              >
                <div
                  className={twMerge(
                    "mt-1 rounded-full border border-primary size-5 min-w-5",
                    isSelected && "shadow-[0_0_0_5px_#f02e06_inset] border-brand-600"
                  )}
                />
                <div className="grow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <SimpleText color="secondary-700" className="text-xl leading-[30px]" weight="font-semibold">
                        {item.name}
                      </SimpleText>
                      {item.isCurrent && <Badge color="brand">Current plan</Badge>}
                    </div>
                    {!item.isFree && (
                      <SimpleText weight="font-medium" className="text-xl leading-[30px]">
                        <SimpleText tag="span" color="primary-900">
                          {item.price}
                        </SimpleText>
                        <SimpleText tag="span" color="quaternary-500">
                          /month
                        </SimpleText>
                      </SimpleText>
                    )}
                  </div>
                  <div className="mt-3">
                    <SimpleText color="tertiary-600" className="mb-5">
                      {item.description}
                    </SimpleText>
                    <div className="space-y-3">
                      {item.options.map((option) => (
                        <div key={item.id + option.id} className="flex items-center gap-2">
                          <Check color="#4CA30D" size={16} />
                          <SimpleText color="tertiary-600" className="text-sm" weight="font-medium">
                            {option.name}
                          </SimpleText>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </Radio>
        ))}
      </RadioGroup>
      <div className="flex justify-end">
        <Button isLoading={false} type="submit">
          Upgrade
        </Button>
      </div>
    </div>
  );
}
