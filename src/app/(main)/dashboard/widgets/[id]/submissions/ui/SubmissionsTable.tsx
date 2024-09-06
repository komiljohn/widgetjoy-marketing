"use client";

import React, { useMemo, useState } from "react";

import Table from "@/components/ui/table";

import { tableColumns, tableData } from "./fakeData";

export default function SubmissionsTable() {
  const [itemOffset, setItemOffset] = useState(0);
  const [isPending, setIsPending] = useState(false);

  const computedData = useMemo(() => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
    }, 500);
    return tableData.slice(itemOffset * 3, (itemOffset + 1) * 3);
  }, [tableData, itemOffset]);

  return (
    <Table
      wrapperClassName="bg-white dark:bg-bg-primary-dark"
      showPagination
      showIndexes
      isPending={isPending}
      columns={tableColumns}
      data={computedData}
      totalCount={tableData.length}
      itemOffset={itemOffset}
      setItemOffset={setItemOffset}
    />
  );
}
