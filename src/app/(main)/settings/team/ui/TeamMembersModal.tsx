import { valibotResolver } from "@hookform/resolvers/valibot";
import { Mail, Plus, Trash2, UserPlus2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import * as v from "valibot";

import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/constants";
import Routes from "@/utils/routes";
import { requiredEmailField } from "@/utils/validationFields";

import { RoundedLinesSvg } from "../../../../../../public/icons";

export const EmailSchema = v.object({
  emails: v.array(
    v.object({
      email: requiredEmailField,
    })
  ),
});

export type EmailFormType = v.InferOutput<typeof EmailSchema>;

export default function TeamMembersModal() {
  const { activeModal, closeModal } = useModalStore();
  const [isPending, setIsPending] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const isOpen = activeModal === Modals.team_member;

  const methods = useForm<EmailFormType>({
    resolver: valibotResolver(EmailSchema),
    defaultValues: { emails: [{ email: "" }] },
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "emails",
  });

  const closeHandler = () => {
    if (searchParams.get("invite-modal")) {
      router.replace(Routes.settings_team, undefined);
    }
    closeModal();
  };

  const onSubmit = () => {
    setIsPending(true);

    setTimeout(() => {
      closeHandler();
      setIsPending(false);
      toastQueue.add(
        {
          title: "Invitations sent successfully",
          description:
            "Invites have been successfully sent to the specified email addresses. You can see the statuses on the team members page.",
        },
        { timeout: 3000 }
      );
    }, 1500);
  };

  return (
    <Modal ariaLabel="Invite team members" isOpen={isOpen} onClose={closeHandler} className="overflow-hidden relative">
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
        <SimpleText color="secondary-700" className="mb-1.5" weight="font-medium">
          Email address
        </SimpleText>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {fields.map((_, idx) => (
              <div key={idx} className="flex gap-2">
                <FormTextInput
                  aria-label="Email"
                  leftIcon={<Mail size={20} />}
                  name={`emails.${idx}.email`}
                  placeholder="you@untitledui.com"
                  className="mb-3 grow"
                />
                {fields.length > 1 && (
                  <Button variant="secondary" isIcon onPress={() => remove(idx)}>
                    <Trash2 size={20} />
                  </Button>
                )}
              </div>
            ))}
            <Button
              variant="link"
              textColor="brand-500"
              leftIcon={<Plus size={20} />}
              onPress={() => append({ email: "" })}
            >
              Add another
            </Button>
            <div className="flex gap-3 mt-8">
              <Button className="w-1/2" variant="secondary" onPress={closeHandler}>
                Cancel
              </Button>
              <Button isLoading={isPending} className="w-1/2" type="submit">
                Send invites
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
}
