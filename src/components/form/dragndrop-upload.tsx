import { File, Trash2, UploadCloud } from "lucide-react";
import { useState } from "react";
import { DropZone, FileTrigger, ValidationResult } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

import { toastQueue } from "@/providers/ToastProvider";

import { Button } from "../ui/button";
import { SimpleText } from "../ui/typography";

export function FormDragndropUpload({ name }: { name: string }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DragndropUploadProps errorMessage={error?.message} onSelect={field.onChange} />
      )}
    />
  );
}

interface DragndropUploadProps {
  onSelect?: (a: string) => void;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function DragndropUploadProps({ errorMessage, onSelect }: DragndropUploadProps) {
  const [file, setFile] = useState<File>();

  const createObjectURL = (object: File) => {
    return window.URL ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDrop = async (e: any) => {
    if (e) {
      const file = await e.items[0].getFile();
      if (!file.type.includes("video/")) {
        toastQueue.add(
          {
            title: "Invalid file format",
            description: "Valid file formats are: MP4, MPG or GIF",
            type: "warn",
          },
          { timeout: 2000 }
        );
      }
      const src = createObjectURL(file);

      setFile(file);
      onSelect?.(src);
    }
  };

  return (
    <div>
      {file ? (
        <div className="relative border border-border-secondary dark:border-border-dark-primary rounded-xl py-[15px] px-[17px] flex items-center gap-3">
          <div className="relative">
            <File strokeWidth={1.5} size={40} className="text-border-primary dark:text-fg-disabled" />
            <span className="bg-blue-dark-600 py-0.5 px-[3px] rounded-sm font-bold text-[10px] leading-[12px] absolute bottom-2 left-0">
              {file.type.split("/").at(-1)?.toUpperCase()}
            </span>
          </div>
          <div className="grow">
            <SimpleText color="secondary-700" weight="font-semibold" className="truncate max-w-[300px]">
              {file.name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, expedita.
            </SimpleText>
            <SimpleText color="tertiary-600">{Math.round(file.size / 1024)} KB</SimpleText>
          </div>
          <Button
            onPress={() => {
              setFile(undefined);
              onSelect?.("");
            }}
            type="button"
            variant="link"
            className="absolute top-[7px] right-[7px] p-2 hover:bg-secondary-light dark:hover:bg-secondary-dark"
          >
            <Trash2 size={20} />
          </Button>
        </div>
      ) : (
        <DropZone
          onDrop={handleDrop}
          className="flex items-center gap-3 border border-border-secondary dark:border-border-dark-primary rounded-xl py-[15px] px-[23px] drop-target:border-brand-600 dark:drop-target:border-brand-600 outline-offset-0 outline-none dark:drop-target:outline-1 dark:drop-target:outline-brand-500 dark:focus-visible:outline-1 dark:focus-visible:outline-offset-0 dark:focus-visible:outline-ring dark:focus-visible:border-ring disabled:dark:bg-secondary-dark disabled:bg-disabled"
        >
          <FileTrigger
            allowsMultiple={false}
            acceptedFileTypes={["video/*"]}
            onSelect={(e) => {
              const files = e ? Array.from(e) : [];
              const src = createObjectURL(files[0]);
              setFile(files[0]);
              onSelect?.(src);
            }}
          >
            <div className="text-center w-full">
              <div className="shadow-xs border border-border-secondary dark:border-border-dark-primary p-[9px] rounded-md mb-3 w-fit mx-auto">
                <UploadCloud size={20} className="text-button-secondary-fg dark:text-secondary-700" />
              </div>
              <SimpleText className="flex gap-1 w-[220px] mx-auto mb-1">
                <Button textColor="brand-500" variant="link">
                  Click to upload
                </Button>
                <SimpleText tag="span" color="tertiary-600">
                  or drag and drop
                </SimpleText>
              </SimpleText>
              <SimpleText color="tertiary-600"> MP4, MPG or GIF (max. 50MB)</SimpleText>
            </div>
          </FileTrigger>
        </DropZone>
      )}
      {errorMessage && (
        <p aria-label="error message" className="text-brand-600 text-sm mt-1.5">
          {errorMessage?.toString()}
        </p>
      )}
    </div>
  );
}
