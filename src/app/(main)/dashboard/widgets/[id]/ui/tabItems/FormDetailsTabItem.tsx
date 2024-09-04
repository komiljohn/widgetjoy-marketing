import React from "react";

import { Switch } from "@/components/form/switch";
import { TextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import { SimpleText } from "@/components/ui/typography";

export default function FormDetailsTabItem() {
  return (
    <div className="p-6 overflow-auto min-h-[calc(100dvh-146px)]">
      <SimpleText className="mb-1" weight="font-semibold">
        Labels
      </SimpleText>
      <SimpleText color="secondary-700" className="text-sm mb-6" weight="font-medium">
        Update the details of your widget.
      </SimpleText>
      <div className="space-y-4 mb-6">
        <TextInput label="Heading" />
        <TextInput label="Button label" />
      </div>
      <Divider className="mb-6" />
      <Switch className="mb-6" description="Capture screenshot from current page with one click">
        Capture screenshot
      </Switch>
      <Button className="w-full">Save changes</Button>
    </div>
  );
}
