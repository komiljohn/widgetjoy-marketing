import { CalendarDate, parseDate } from "@internationalized/date";
import dayjs from "dayjs";
import { Save, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import DatePicker from "@/components/form/date-picker";
import { FormImageUpload } from "@/components/form/image-upload";
import { MyListBoxItem } from "@/components/form/list-box";
import { FormSelect } from "@/components/form/select";
import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import { useModalStore } from "@/store/useModalStore";

export default function SimpleTestimonialTabContent({ id }: { id: "simple" | "video" }) {
  const [isPending, setIsPending] = useState(false);
  const methods = useForm<SimpleTestimonialFormType>({
    resolver: valibotResolver(SimpleTestimonialSchema),
    defaultValues: {
      client: "",
      testimonial: "",
      source: "",
      date: undefined,
      photo: "",
    },
  });
  const { modalData } = useModalStore();

  const onSubmit = () => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      toastQueue.add({ title: "Successfully updated" }, { timeout: 1500 });
    }, 1000);
  };

  useEffect(() => {
    methods.reset({
      client: modalData?.customer,
      testimonial: modalData?.testimonial,
      source: modalData?.sourceId,
      date: parseDate(dayjs(modalData?.date).format("YYYY-MM-DD")),
    });
  }, [modalData]);

  return (
    <div>
      <FormProvider {...methods}>
        <form className="space-y-5" onSubmit={methods.handleSubmit(onSubmit)}>
          <FormTextInput name="client" label="Client" />
          {id === "simple" && <FormTextInput type="multiline" name="testimonial" label="Testimonial" />}
          {id === "simple" ? <FormImageUpload name="photo" /> : <FormDragndropUpload name="photo" />}
          <Divider />
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <DatePicker name="date" />
              <FormSelect name="source" placeholder="Choose source">
                <MyListBoxItem id="1" className="gap-2 justify-between">
                  LinkedIn
                </MyListBoxItem>
                <MyListBoxItem id="2" className="gap-2 justify-between">
                  YouTube
                </MyListBoxItem>
                <MyListBoxItem id="3" className="gap-2 justify-between">
                  Telegram
                </MyListBoxItem>
              </FormSelect>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" lefticon={<Trash2 size={20} />}>
                Delete
              </Button>
              <Button isLoading={isPending} type="submit" lefticon={<Save size={20} />}>
                Save
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

import { valibotResolver } from "@hookform/resolvers/valibot";
import * as v from "valibot";

import { FormDragndropUpload } from "@/components/form/dragndrop-upload";
import { toastQueue } from "@/providers/ToastProvider";
import { requiredStringField } from "@/utils/validationFields";

export const SimpleTestimonialSchema = v.object({
  client: requiredStringField("Please enter the client"),
  testimonial: requiredStringField("Please enter testimonial"),
  photo: requiredStringField("Please upload photo"),
  date: v.custom<CalendarDate>((input) => input !== undefined, "Please select date"),
  source: requiredStringField("Please select source"),
});

export type SimpleTestimonialFormType = v.InferOutput<typeof SimpleTestimonialSchema>;
