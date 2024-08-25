import { valibotResolver } from "@hookform/resolvers/valibot";
import { OctagonAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as v from "valibot";

import { FormPasswordInput } from "@/components/form/password-input";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/constants";
import Routes from "@/utils/routes";
import { requiredStringField } from "@/utils/validationFields";

import { RoundedLinesSvg } from "../../../../../../public/icons";

export const DeleteAccountSchema = v.object({
  password: requiredStringField("Please enter your password"),
});

export type DeleteAccountFormType = v.InferOutput<typeof DeleteAccountSchema>;

export default function DeleteAccountModal() {
  const { activeModal, closeModal } = useModalStore();
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const isOpen = activeModal === Modals.delete_account;

  const methods = useForm<DeleteAccountFormType>({
    resolver: valibotResolver(DeleteAccountSchema),
    defaultValues: { password: "" },
  });

  const onSubmit = () => {
    setIsPending(true);

    setTimeout(() => {
      closeModal();
      setIsPending(false);
      toastQueue.add(
        {
          title: "Your account has been deleted",
        },
        { timeout: 2000 }
      );
      router.push(Routes.login);
    }, 1500);
  };

  return (
    <Modal ariaLabel="Invite team members" isOpen={isOpen} onClose={closeModal} className="overflow-hidden relative">
      <div className="p-6 relative z-0">
        <div className="size-12 border border-border-secondary dark:border-border-dark-primary flex items-center justify-center rounded-lg mb-4">
          <OctagonAlert color="#D92D20" />
        </div>
        <RoundedLinesSvg className="absolute top-0 left-0 -z-[1] hidden md:inline stroke-rounded-lines dark:stroke-active-dark" />
        <SimpleText color="primary-900" className="mb-1 text-lg" weight="font-semibold">
          Delete account
        </SimpleText>
        <SimpleText color="tertiary-600" className="mb-5 text-sm">
          Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your
          password to confirm you would like to permanently delete your account.
        </SimpleText>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormPasswordInput name="password" label="Password" placeholder="Enter your password" className="mb-8" />
            <div className="flex gap-3 mt-8">
              <Button className="w-1/2" variant="secondary" onPress={closeModal}>
                Cancel
              </Button>
              <Button variant="destructive" isLoading={isPending} className="w-1/2" type="submit">
                Delete account
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
}
