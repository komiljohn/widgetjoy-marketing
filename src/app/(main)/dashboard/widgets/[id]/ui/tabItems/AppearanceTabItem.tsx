import React, { useState } from "react";

import MyColorPicker from "@/components/form/color-picker";
import ImageUpload from "@/components/form/image-upload";
import { Button } from "@/components/ui/button";
import { MyTag, MyTagGroup } from "@/components/ui/tag/tag-group";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";

export default function AppearanceTabItem() {
  return (
    <div className="p-6 border-b border-border-secondary dark:border-active-dark overflow-auto min-h-[calc(100dvh-146px)]">
      <SimpleText className="mb-1" weight="font-semibold">
        Appearance
      </SimpleText>
      <SimpleText color="secondary-700" className="text-sm mb-6" weight="font-medium">
        Customise widget styles
      </SimpleText>
      <AppearanceTabItemForm />
    </div>
  );
}

export function AppearanceTabItemForm() {
  const [isPending, setIsPending] = useState(false);

  const handleSave = () => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      toastQueue.add({ title: "Successfully applied" }, { timeout: 1500 });
    }, 1000);
  };

  return (
    <>
      <div className="space-y-4 mb-6">
        <MyColorPicker label="Primary color" defaultValue="#079455" />
        <MyTagGroup label="Corner radius" selectionMode="single">
          <MyTag>None</MyTag>
          <MyTag>Medium</MyTag>
          <MyTag>Large</MyTag>
        </MyTagGroup>
        <ImageUpload />
      </div>
      <Button onPress={handleSave} isLoading={isPending} className="w-full">
        Apply changes
      </Button>
    </>
  );
}
