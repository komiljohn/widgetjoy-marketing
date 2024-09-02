import React from "react";

import MyColorPicker from "@/components/form/color-picker";
import { Switch } from "@/components/form/switch";
import { TextInput } from "@/components/form/text-input";
import { MyTag, MyTagGroup } from "@/components/ui/tag/tag-group";
import { SimpleText } from "@/components/ui/typography";

export default function GeneralTabItem() {
  return (
    <div>
      <div className="p-6 border-b border-border-secondary dark:border-active-dark">
        <SimpleText className="mb-1" weight="font-semibold">
          Widget content
        </SimpleText>
        <SimpleText color="secondary-700" className="text-sm mb-6" weight="font-medium">
          Add body text and link of the banner.
        </SimpleText>
        <div className="space-y-6">
          <TextInput label="Header title" />
          <TextInput type="multiline" label="Content" />
          <Switch description="Link for more information">Action</Switch>
          <TextInput label="Button label" />
          <TextInput label="Button link" />
        </div>
      </div>
      <div className="p-6">
        <SimpleText className="mb-1" weight="font-semibold">
          Styles
        </SimpleText>
        <SimpleText color="secondary-700" className="text-sm mb-6" weight="font-medium">
          Update the details of your widget.
        </SimpleText>
        <div className="space-y-6">
          <MyTagGroup label="Style" selectionMode="single">
            <MyTag>Simple</MyTag>
            <MyTag>Playful</MyTag>
            <MyTag>Brutalist</MyTag>
          </MyTagGroup>
          <MyColorPicker label="Background color" defaultValue="#FF4F18" />
          <MyColorPicker label="Button color" defaultValue="#FF4F18" />
          <MyColorPicker label="Button border color" defaultValue="#D0D5DD" />
          <Switch>Close action</Switch>
          <Switch description="Automatically changes based on system preference">Dark mode</Switch>
        </div>
      </div>
    </div>
  );
}
