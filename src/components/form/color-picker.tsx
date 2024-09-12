import "./style.css";

import React, { useState } from "react";
import { Button, ColorPickerProps, DialogTrigger } from "react-aria-components";
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";
import { twMerge } from "tailwind-merge";

import { SimpleText } from "../ui/typography";
import { Label } from "./field";
import { MyPopover } from "./popover";
import { textInputStyles } from "./text-input";

interface MyColorPickerProps extends ColorPickerProps {
  label?: string;
}

export default function MyColorPicker({ label }: MyColorPickerProps) {
  const [color, setColor] = useState("#fff");

  return (
    <DialogTrigger>
      <div className="space-y-1.5">
        <Label htmlFor="color">{label}</Label>
        <Button id="color" className={twMerge(textInputStyles, "flex items-center gap-2")}>
          <div
            className="size-5 border border-border-secondary dark:border-secondary-dark rounded-full"
            style={{ backgroundColor: color }}
          />
          <SimpleText color="quaternary-500" className="">
            {color}
          </SimpleText>
        </Button>
      </div>
      <MyPopover>
        <div className="bg-white dark:bg-bg-primary-dark rounded-md">
          <HexAlphaColorPicker color={color} onChange={setColor} />
          <HexColorInput
            prefixed
            color={color}
            onChange={setColor}
            className={twMerge(textInputStyles, "mt-2 py-1 text-sm")}
          />
        </div>
      </MyPopover>
    </DialogTrigger>
  );
}
