import React from "react";

import Avatar from "../avatar";
import { SimpleText } from "../typography";

interface IAvatarCell {
  row: {
    src: string;
    title: string;
    subtitle: string;
  };
}

export default function AvatarCell({ row }: IAvatarCell) {
  return (
    <div className="flex gap-3 items-center">
      <Avatar str={row.src} />
      <div>
        <SimpleText color="primary-900" weight="font-medium">
          {row.title}
        </SimpleText>
        <SimpleText color="tertiary-600" className="max-sm:hidden">
          {row.subtitle}
        </SimpleText>
      </div>
    </div>
  );
}
