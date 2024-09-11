"use client";

import React, { useMemo, useState } from "react";

import Table from "@/components/ui/table";

import { tableColumns, tableData } from "./fakeData";

export default function SubmissionsTable() {
  const [itemOffset, setItemOffset] = useState(0);
  const [isPending, setIsPending] = useState(false);

  const itemsPerPage = 10;

  const computedData = useMemo(() => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
    }, 500);
    return tableData.slice(itemOffset * itemsPerPage, (itemOffset + 1) * itemsPerPage);
  }, [tableData, itemOffset]);

  return (
    <Table
      wrapperClassName="bg-white dark:bg-bg-primary-dark"
      showPagination
      showIndexes
      isPending={isPending}
      columns={tableColumns}
      data={computedData}
      itemsPerPage={itemsPerPage}
      totalCount={tableData.length}
      itemOffset={itemOffset}
      setItemOffset={setItemOffset}
    />
  );
}
