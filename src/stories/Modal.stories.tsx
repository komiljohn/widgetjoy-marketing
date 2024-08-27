import type { Meta } from "@storybook/react";
import { TableOfContents, UserPlus2 } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { SimpleText } from "@/components/ui/typography";

import { RoundedLinesSvg } from "../../public/icons";

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

export const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Show modal</Button>
      <Modal ariaLabel="Storybook book" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6 relative z-0">
          <div className="size-12 border border-border-secondary dark:border-border-dark-primary flex items-center justify-center rounded-lg mb-4">
            <UserPlus2 className="text-button-secondary-fg dark:text-secondary-700" />
          </div>
          <RoundedLinesSvg className="absolute top-0 left-0 -z-[1] hidden md:inline stroke-rounded-lines dark:stroke-active-dark" />
          <SimpleText color="primary-900" className="mb-1 text-lg" weight="font-semibold">
            Invite team members
          </SimpleText>
          <SimpleText color="tertiary-600" className="mb-5 text-sm">
            Invite colleagues to collaborate on this project.
          </SimpleText>
          <TableOfContents size={100} className="mx-auto" />
          <div className="flex gap-3 mt-8">
            <Button className="w-1/2" variant="secondary" onPress={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button className="w-1/2">Send invites</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

Example.args = {
  onRowAction: null,
  onCellAction: null,
  selectionMode: "multiple",
};
