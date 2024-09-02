import { Trash2Icon } from "lucide-react";
import { ReactNode } from "react";

import Avatar from "@/components/ui/avatar";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";

interface ITeamMember {
  id: number;
  name: string;
  role: string;
  date: string;
  email: string;
  isPending?: boolean;
}

export const tableData: ITeamMember[] = [
  {
    id: 1,
    name: "Abror",
    role: "Backend programmer",
    date: "20.04.2024",
    email: "test@gmail.com",
    isPending: true,
  },
  {
    id: 2,
    name: "Sohib",
    role: "Frontend programmer",
    date: "05.12.2022",
    email: "frontie@gmail.com",
  },
  {
    id: 3,
    name: "Gulirano",
    role: "Mobile programmer",
    date: "28.04.2024",
    email: "mobie@gmail.com",
  },
  {
    id: 3,
    name: "Dildora",
    role: "UI/UX esigner",
    date: "01.04.1999",
    email: "mobie@gmail.com",
  },
];

export interface ITableColumn<T> {
  key: string;
  name: string;
  render?: (a: T) => ReactNode;
}

export const tableColumns: ITableColumn<ITeamMember>[] = [
  {
    key: "name",
    name: "Name",
    render: (row) => (
      <div className="flex gap-3 items-center">
        <Avatar str={row.name} />
        <div>
          <SimpleText color="primary-900" weight="font-medium">
            {row.name}
          </SimpleText>
          <SimpleText color="tertiary-600" className="max-sm:hidden">
            {row.email}
          </SimpleText>
          <SimpleText color="tertiary-600" className="sm:hidden whitespace-nowrap">
            {row.role}
          </SimpleText>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    name: "Role",
  },
  {
    key: "actions",
    name: "",
    render: (row) =>
      row.isPending ? (
        <Badge color="brand">Pending</Badge>
      ) : (
        <Button
          variant="link"
          className="text-tertiary-600 dark:hover:text-red-800 hover:text-red-500 dark:text-tertiary-dark-600"
          lefticon={<Trash2Icon size={20} />}
        >
          Delete
        </Button>
      ),
  },
];
