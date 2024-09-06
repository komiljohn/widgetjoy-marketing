import { Dispatch, SetStateAction } from "react";
import { Cell, Column, Row, Table as AriaTable, TableBody, TableHeader } from "react-aria-components";

import { ITableColumn } from "@/app/(main)/settings/team/fakeData";

import Pagination from "./pagination";
import Skleton from "../skleton";
import { twMerge } from "tailwind-merge";

interface Props<T> {
  showIndexes?: boolean;
  columns: ITableColumn<T>[];
  data: T[];
  itemOffset?: number;
  setItemOffset?: Dispatch<SetStateAction<number>>;
  itemsPerPage?: number;
  totalCount?: number;
  isPending?: boolean;
  showPagination?: boolean;
  wrapperClassName?: string;
}

export default function Table({
  showIndexes = false,
  columns,
  isPending,
  data,
  wrapperClassName,
  itemsPerPage = 3,
  itemOffset = 0,
  ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: Props<any>) {
  const headColStyles =
    "bg-secondary-light dark:bg-bg-primary-dark py-3 px-[23px] text-xs leading-[18px] text-tertiary-600 dark:text-tertiary-dark-600 font-medium text-start whitespace-nowrap";
  const bodyColStyles = "py-[15px] px-[23px] text-sm text-tertiary-600 dark:text-tertiary-dark-600";

  return (
    <div
      className={twMerge(
        "shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_#EAECF0] dark:shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_#1F242F] rounded-xl w-full overflow-x-auto",
        wrapperClassName
      )}
    >
      <AriaTable aria-label="Files" selectionMode="multiple" className="rounded-xl w-full overflow-x-auto">
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
        <TableBody renderEmptyState={() => <div className="py-[15px] px-[23px] text-sm w-full">No data</div>}>
          {isPending
            ? Array.from({ length: 5 }, (_, i) => (
                <Row key={i} className="border-t border-border-secondary dark:border-secondary-dark">
                  {showIndexes && (
                    <Cell className={bodyColStyles}>
                      <Skleton className="h-5 w-full" />
                    </Cell>
                  )}
                  {columns.map((col) => (
                    <Cell className={bodyColStyles} key={i + col.key}>
                      <Skleton className="h-5 w-full" />
                    </Cell>
                  ))}
                </Row>
              ))
            : data.map((row, idx) => (
                <Row key={row.id} className="border-t border-border-secondary dark:border-secondary-dark">
                  {showIndexes && <Cell className={bodyColStyles}>{itemOffset * itemsPerPage + 1 + idx}</Cell>}
                  {columns.map((col) => (
                    <Cell className={bodyColStyles} key={row.id + col.key}>
                      {col?.render ? col.render(row) : row[col.key]}
                    </Cell>
                  ))}
                </Row>
              ))}
        </TableBody>
      </AriaTable>
      {props.showPagination && (
        <Pagination
          itemOffset={itemOffset}
          itemsPerPage={itemsPerPage}
          setItemOffset={props.setItemOffset}
          totalCount={props.totalCount}
        />
      )}
    </div>
  );
}
