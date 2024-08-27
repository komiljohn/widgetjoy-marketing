"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/constants";

import DeleteAccountModal from "./DeleteAccountModal";

export default function ProfileDeleteAccount() {
  const { setActiveModal } = useModalStore();

  return (
    <>
      <div className="max-w-[864px] mx-auto bg-white dark:bg-bg-primary-dark shadow-xs border border-bg-disabled dark:border-border-dark-primary rounded-lg p-6 mb-6">
        <div className="flex max-md:flex-col justify-between md:gap-8 gap-5">
          <div className="max-w-[280px]">
            <SimpleText color="secondary-700" weight="font-semibold" className="text-sm">
              Update Password
            </SimpleText>
            <SimpleText color="tertiary-600" className="text-sm">
              Ensure your account is using a long, random password to stay secure.
            </SimpleText>
          </div>
          <div className="grow p-[15px] rounded-lg border border-border-secondary dark:border-secondary-dark bg-bg-error-primary dark:bg-bg-error-dark-primary">
            <SimpleText color="tertiary-600" className="text-sm mb-4">
              Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
              your account, please download any data or information that you wish to retain.
            </SimpleText>
            <Button variant="destructive" onPress={() => setActiveModal(Modals.delete_account)}>
              Delete account
            </Button>
          </div>
        </div>
      </div>
      <DeleteAccountModal />
    </>
  );
}
