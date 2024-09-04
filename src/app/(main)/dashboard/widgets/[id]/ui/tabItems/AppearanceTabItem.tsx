import React from "react";

import { TextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";

export default function AppearanceTabItem() {
  return (
    <div className="p-6 border-b border-border-secondary dark:border-active-dark overflow-auto min-h-[calc(100dvh-146px)]">
      <SimpleText className="mb-1" weight="font-semibold">
        Appearance
      </SimpleText>
      <SimpleText color="secondary-700" className="text-sm mb-6" weight="font-medium">
        Update the details of your widget.
      </SimpleText>
      <div className="space-y-4 mb-6">
        <TextInput label="Heading" />
        <TextInput label="Widget description" />
        <TextInput label="Thank you message" />
      </div>
      <Button className="w-full">Save changes</Button>
    </div>
  );
}
