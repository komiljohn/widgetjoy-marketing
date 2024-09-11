import dayjs from "dayjs";
import { PenLine, Trash2Icon } from "lucide-react";
import React from "react";

import Avatar from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/constants";

import { ITableColumn, ITeamMember } from "../ui/fakeData";
import { satisfactionData } from "../ui/SatisfactionTable";

export default function getSatisfactionTableColumns(): ITableColumn<ITeamMember>[] {
  return [
    {
      key: "id",
      name: "Id",
    },
    {
      key: "date",
      name: "Date",
      render: (row) => <span className="whitespace-nowrap">{dayjs(row.date).format("DD.MM.YYYY")}</span>,
    },
    {
      key: "customer",
      name: "Customer",
      render: (row) => (
        <div className="flex gap-3 items-center">
          <Avatar str={row.customer as string} />
          <div>
            <SimpleText color="primary-900" weight="font-medium">
              {row.customer}
            </SimpleText>
            <SimpleText color="tertiary-600" className="whitespace-nowrap">
              {row.role}
            </SimpleText>
          </div>
        </div>
      ),
    },
    {
      key: "testimonial",
      name: "Testimonial",
      render: (row) => <p className="truncate max-w-[450px]">{row.testimonial}</p>,
    },
    {
      key: "actions",
      name: "",
      render: (row) => (
        <div className="flex gap-3">
          <EditButton id={row.id} />
          <Button className="py-[7px] px-[7px]" variant="secondary" lefticon={<Trash2Icon size={20} />}></Button>
        </div>
      ),
    },
  ];
}

const EditButton = ({ id }: { id: number }) => {
  const { setActiveModal, setModalData } = useModalStore();

  const handleOpenModal = () => {
    setActiveModal(Modals.testimonial);
    setModalData(satisfactionData.find((i) => i.id === id));
  };

  return (
    <Button
      onPress={handleOpenModal}
      className="py-[7px] px-[7px]"
      variant="secondary"
      lefticon={<PenLine size={20} />}
    ></Button>
  );
};
