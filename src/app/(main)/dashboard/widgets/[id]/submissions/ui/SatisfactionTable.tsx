"use client";

import dayjs from "dayjs";
import React, { useState } from "react";

import Table from "@/components/ui/table";

import getSatisfactionTableColumns from "../utils/getSatisfactionTableColumns";
import TestimonialModal from "./TestimonialModal";

export const satisfactionData = Array.from({ length: 30 }, (_, i) => ({
  id: 1 + i,
  customer: "Guy Hawkins " + (i + 1),
  date: dayjs("2024-01-01", "YYYY-MM-DD").add(i, "day"),
  role: "Database administrator",
  sourceId: i % 2 === 0 ? "1" : "2",
  testimonial:
    "While the AI writer excels at generating content, it would be beneficial to have more control over the tone and style to ensure it aligns with my brand voice",
}));

export default function SatisfactionTable() {
  const [isPending] = useState(false);

  return (
    <>
      <Table
        isDraggable
        isPending={isPending}
        data={satisfactionData}
        totalCount={satisfactionData.length}
        columns={getSatisfactionTableColumns()}
        wrapperClassName="bg-white dark:bg-bg-primary-dark"
      />
      <TestimonialModal />
    </>
  );
}
