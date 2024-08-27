import React from "react";
import { Cell, Column, Row, Table as AriaTable, TableBody, TableHeader } from "react-aria-components";

import { ITableColumn } from "@/app/(main)/settings/team/fakeData";

interface Props<T> {
  showIndexes?: boolean;
  columns: ITableColumn<T>[];
  data: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Table({ showIndexes = false, columns, data }: Props<any>) {
  const headColStyles =
    "bg-secondary-light dark:bg-bg-primary-dark py-3 px-[23px] text-xs leading-[18px] text-tertiary-600 dark:text-tertiary-dark-600 font-medium text-start";
  const bodyColStyles = "py-[15px] px-[23px] text-sm text-tertiary-600 dark:text-tertiary-dark-600";

  return (
    <AriaTable
      aria-label="Files"
      selectionMode="multiple"
      className="shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_#EAECF0] dark:shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_#1F242F] block rounded-xl overflow-x-auto max-w-fit"
    >
      <TableHeader>
        {showIndexes && (
          <Column className={headColStyles} isRowHeader>
            №
          </Column>
        )}
        {columns.map((col) => (
          <Column isRowHeader key={col?.key} className={headColStyles}>
            {col.name}
          </Column>
        ))}
      </TableHeader>
      <TableBody renderEmptyState={() => <div className="py-[15px] px-[23px] text-sm">No data</div>}>
        {data.map((row, idx) => (
          <Row key={row.id} className="border-t border-border-secondary dark:border-secondary-dark">
            {showIndexes && <Cell className={bodyColStyles}>{idx + 1}</Cell>}
            {columns.map((col) => (
              <Cell className={bodyColStyles} key={row.id + col.key}>
                {col?.render ? col.render(row) : row[col.key]}
              </Cell>
            ))}
          </Row>
        ))}
      </TableBody>
    </AriaTable>
  );
}
