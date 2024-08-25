"use client";

import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

import { Button } from "@/components/ui/button";
import Table from "@/components/ui/table";
import { SimpleText } from "@/components/ui/typography";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/constants";

import { tableColumns, tableData } from "../fakeData";

const TeamMembersModal = dynamic(() => import("./TeamMembersModal"));

export default function TeamMembers() {
  const { setActiveModal } = useModalStore();

  return (
    <>
      <div className="max-w-[864px] mx-auto bg-white dark:bg-bg-primary-dark shadow-xs border border-bg-disabled dark:border-border-dark-primary rounded-lg p-6 mb-6">
        <div className="border-b dark:border-border-dark-primary border-border-secondary pb-5 mb-6">
          <SimpleText color="primary-900" weight="font-semibold" className="text-lg">
            Team members
          </SimpleText>
          <SimpleText color="tertiary-600" className="text-sm">
            Update team settings and members.
          </SimpleText>
        </div>
        <div className="flex max-md:flex-col justify-between md:gap-8 gap-4">
          <div>
            <SimpleText color="secondary-700" weight="font-semibold" className="text-sm">
              Team members
            </SimpleText>
            <SimpleText color="tertiary-600" className="text-sm mb-3">
              Add or remove team members.
            </SimpleText>
            <Button
              variant="link"
              textColor="brand-500"
              leftIcon={<Plus size={20} />}
              onPress={() => setActiveModal(Modals.team_member)}
            >
              Add new member
            </Button>
          </div>
          <div className="max-w-[500px]">
            <Table columns={tableColumns} data={tableData} />
          </div>
        </div>
      </div>
      <TeamMembersModal />
    </>
  );
}
