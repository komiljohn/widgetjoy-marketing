import "./style.css";

import React, { useState } from "react";
import { Button, ColorPickerProps, DialogTrigger, Popover } from "react-aria-components";
import { RgbaColor, RgbaColorPicker } from "react-colorful";
import { twMerge } from "tailwind-merge";

import { rgbaToHex } from "@/utils/rgbaToHex";

import { SimpleText } from "../ui/typography";
import { Label } from "./field";
import { textInputStyles } from "./text-input";

interface MyColorPickerProps extends ColorPickerProps {
  label?: string;
}

export default function MyColorPicker({ label }: MyColorPickerProps) {
  const [color, setColor] = useState<RgbaColor>({ r: 255, g: 255, b: 255, a: 1 });

  return (
    <DialogTrigger>
      <div className="space-y-1.5">
        <Label htmlFor="color">{label}</Label>
        <Button id="color" className={twMerge(textInputStyles, "flex items-center gap-2")}>
          <div
            className="size-5 border border-border-secondary dark:border-secondary-dark rounded-full"
            style={{ backgroundColor: `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${color?.a})` }}
          />
          <SimpleText color="quaternary-500" className="">
            {rgbaToHex(`rgba(${color?.r}, ${color?.g}, ${color?.b}, ${color?.a})`)}
          </SimpleText>
        </Button>
      </div>
      <Popover placement="bottom start">
        <RgbaColorPicker color={color} onChange={setColor} />
      </Popover>
    </DialogTrigger>
  );
}
