import type { Meta } from "@storybook/react";
import React from "react";

import Table from "@/components/ui/table";

const meta: Meta<typeof Table> = {
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showIndexes: {
      control: "boolean",
    },
  },
};

export default meta;

const rows = [
  { id: 1, name: "Games", date: "6/7/2020", type: "File folder" },
  { id: 2, name: "Program Files", date: "4/7/2021", type: "File folder" },
  { id: 3, name: "bootmgr", date: "11/20/2010", type: "System file" },
  { id: 4, name: "log.txt", date: "1/18/2016", type: "Text Document" },
  { id: 5, name: "Proposal.ppt", date: "6/18/2022", type: "PowerPoint file" },
  { id: 6, name: "Taxes.pdf", date: "12/6/2023", type: "PDF Document" },
  { id: 7, name: "Photos", date: "8/2/2021", type: "File folder" },
  { id: 8, name: "Documents", date: "3/18/2023", type: "File folder" },
  { id: 9, name: "Budget.xls", date: "1/6/2024", type: "Excel file" },
];

const columns = [
  {
    key: "name",
    name: "Name",
  },
  {
    key: "date",
    name: "Date",
  },
  {
    key: "type",
    name: "Type",
  },
];

export const Example = () => {
  return <Table showIndexes columns={columns} data={rows} />;
};

Example.args = {
  onRowAction: null,
  onCellAction: null,
  selectionMode: "multiple",
};
