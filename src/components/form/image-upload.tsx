import { useState } from "react";
import { FileTrigger } from "react-aria-components";

import { Button } from "../ui/button";
import { SimpleText } from "../ui/typography";

export default function ImageUpload() {
  const [file, setFile] = useState<string[]>();

  return (
    <FileTrigger
      acceptedFileTypes={["image/png", "image/jpg", "image/jpeg", "image/svg"]}
      onSelect={(e) => {
        const files = e ? Array.from(e) : [];
        const filenames = files.map((file) => file.name);
        setFile(filenames);
      }}
    >
      <div className="flex shadow-xs border border-border-secondary dark:border-border-dark-primary rounded-md">
        <SimpleText
          color="quaternary-500"
          className="select-none grow border-r bg-disabled dark:border-border-dark-primary dark:bg-secondary-dark px-3 py-[7px] rounded-l-md truncate transition"
        >
          {file ?? "Choose file"}
        </SimpleText>
        <div className="flex items-center justify-center min-w-[82px] max-w-[82px]">
          <Button variant="secondary" className="border-none rounded-none rounded-r-md px-0 w-full">
            {file ? "Change" : "Select"}
          </Button>
        </div>
      </div>
    </FileTrigger>
  );
}
