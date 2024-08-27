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

export const Primary: StoryObj<StoryProps> = {
  args: {
    variant: "primary",
  },
};

export const Secondary: StoryObj<StoryProps> = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: StoryObj<StoryProps> = {
  args: {
    variant: "destructive",
  },
};

export const Link: StoryObj<StoryProps> = {
  args: {
    variant: "link",
    textColor: "brand-500",
  },
};
