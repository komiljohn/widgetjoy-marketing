import { Trash2Icon } from "lucide-react";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface ITeamMember {
  id: number;
  feedback: string;
  feedback_type: string;
  date: string;
}

const feedback_text =
  "While the AI writer excels at generating content, it would be beneficial to have more control over the tone and style to ensure it aligns with my brand voice";

export const tableData: ITeamMember[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  feedback_type: `💡 Idea ${i + 1}`,
  feedback: feedback_text,
  date: `${i + 1}.04.2024`,
}));

export interface ITableColumn<T> {
  key: string;
  name: string;
  render?: (a: T) => ReactNode;
}

export const tableColumns: ITableColumn<ITeamMember>[] = [
  {
    key: "date",
    name: "Date",
  },
  {
    key: "feedback_type",
    name: "Feedback type",
  },
  {
    key: "feedback",
    name: "Feedback",
    render: (row) => <p className="truncate max-w-[450px]">{row.feedback}</p>,
  },
  {
    key: "actions",
    name: "",
    render: () => (
      <div className="flex gap-3">
        <Button variant="secondary" className="py-[7px]">
          View
        </Button>
        <Button variant="secondary" className="py-[7px]" lefticon={<Trash2Icon size={20} />}>
          Delete
        </Button>
      </div>
    ),
  },
];
