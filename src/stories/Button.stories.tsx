import { Meta, StoryObj } from "@storybook/react";
import { Circle } from "lucide-react";
import { ComponentProps } from "react";

import { Button } from "@/components/ui/button";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
  args: {
    isDisabled: false,
    children: "Button CTA",
    leftIcon: <Circle size={20} />,
    rightIcon: <Circle size={20} />,
  },
};
export default meta;

export const Primary = {
  args: {
    variant: "primary",
    isDisabled: false,
  },
};

export const Secondary: StoryObj<StoryProps> = {
  args: {
    variant: "secondary",
  },
};
