import { UploadCloud, X } from "lucide-react";
import { default as NextImage } from "next/image";
import { useState } from "react";
import { FileTrigger, ValidationResult } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

import { Button } from "../ui/button";

export function FormImageUpload({ name }: { name: string }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ImageUpload errorMessage={error?.message} onSelect={field.onChange} />
      )}
    />
  );
}

interface ImageUploadProps {
  onSelect?: (a: string) => void;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function ImageUpload({ errorMessage, onSelect }: ImageUploadProps) {
  const [image, setImage] = useState<HTMLImageElement>();

  function createObjectURL(object: File) {
    return window.URL ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="relative">
          {image && (
            <Button
              onPress={() => {
                setImage(undefined);
                onSelect?.("");
              }}
              className="absolute left-[32px] top-0 p-0.5 rounded-full"
              isIcon
              variant="secondary"
            >
              <X size={14} />
            </Button>
          )}
          <NextImage
            src={image?.src ?? "/images/default.png"}
            width={48}
            height={48}
            alt="preview"
            className="rounded-full h-12 object-fill"
          />
        </div>

        <FileTrigger
          allowsMultiple={false}
          acceptedFileTypes={["image/png", "image/jpg", "image/jpeg", "image/svg"]}
          onSelect={(e) => {
            const files = e ? Array.from(e) : [];
            const src = createObjectURL(files[0]);
            const image = new Image();
            image.src = src;
            setImage(image);
            onSelect?.(image.src);
          }}
        >
          <Button lefticon={<UploadCloud size={20} />} variant="secondary" className="py-[7px]">
            {image ? "Change photo" : "Upload photo"}
          </Button>
        </FileTrigger>
      </div>
      {errorMessage && (
        <p aria-label="error message" className="text-brand-600 text-sm mt-1.5">
          {errorMessage?.toString()}
        </p>
      )}
    </div>
  );
}
