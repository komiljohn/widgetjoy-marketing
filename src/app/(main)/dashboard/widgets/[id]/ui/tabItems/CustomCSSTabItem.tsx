import React from "react";

import Badge from "@/components/ui/badge";
import { SimpleText } from "@/components/ui/typography";

export default function CustomCSSTabItem() {
  return (
    <div className="overflow-auto max-h-[calc(100dvh-146px)] p-6">
      <SimpleText className="mb-1" weight="font-semibold">
        Custom styles
      </SimpleText>
      <SimpleText color="secondary-700" className="text-sm mb-6" weight="font-medium">
        Add your custom styles and make your widget outstanding.
      </SimpleText>
      <div className="mb-6">Editor</div>
      <div>
        <SimpleText className="mb-[18px] text-sm" color="quaternary-500">
          Used classes
        </SimpleText>
        <div className="flex flex-wrap gap-2">
          <Badge>.card</Badge>
          <Badge>.button</Badge>
          <Badge>.field</Badge>
          <Badge>.icon_close</Badge>
          <Badge>.card_header</Badge>
        </div>
      </div>
    </div>
  );
}
