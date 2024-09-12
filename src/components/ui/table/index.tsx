import "./style.css";

import { Grip } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Cell, Column, Row, Table as AriaTable, TableBody, TableHeader, useDragAndDrop } from "react-aria-components";
import { useListData } from "react-stately";
import { twMerge } from "tailwind-merge";

import { ITableColumn } from "@/app/(main)/settings/team/fakeData";

import { Button } from "../button";
import Skleton from "../skleton";
import Pagination from "./pagination";

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
  isDraggable?: boolean;
}

export default function Table({
  showIndexes = false,
  columns,
  isPending,
  data,
  wrapperClassName,
  itemsPerPage = 3,
  itemOffset = 0,
  isDraggable = false,
  ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: Props<any>) {
  const headColStyles =
    "bg-secondary-light dark:bg-bg-primary-dark py-3 px-[23px] text-xs leading-[18px] text-tertiary-600 dark:text-tertiary-dark-600 font-medium text-start whitespace-nowrap focus-ring -outline-offset-2 rounded-xl";
  const bodyColStyles =
    "py-[15px] px-[23px] text-sm text-tertiary-600 dark:text-tertiary-dark-600 focus-ring -outline-offset-2 rounded-xl";

  const list = useListData({
    initialItems: data,
  });

  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      Array.from(new Set(keys)).map((key) => ({
        "text/plain": list.getItem(key).customer,
      })),
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys);
      }
    },
  });

  return (
    <div
      className={twMerge(
        "shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_#EAECF0] dark:shadow-[0_1px_2px_0_#1018280D,0_0_0_1px_#1F242F] rounded-xl w-full overflow-x-auto",
        wrapperClassName
      )}
    >
      <AriaTable
        aria-label="Files"
        selectionMode="multiple"
        dragAndDropHooks={isDraggable ? dragAndDropHooks : undefined}
        className="rounded-xl w-full overflow-x-auto"
      >
        <TableHeader>
          {isDraggable && <Column className={headColStyles}></Column>}
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

        {isPending && (
          <TableBody
            items={list.items}
            renderEmptyState={() => <div className="py-[15px] px-[23px] text-sm w-full">No data</div>}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <Row key={i} className="border-t border-border-secondary dark:border-secondary-dark">
                {isDraggable && (
                  <Cell className={bodyColStyles}>
                    <Skleton className="h-5 w-full" />
                  </Cell>
                )}
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
            ))}
          </TableBody>
        )}

        {!isPending && (
          <TableBody
            items={list.items}
            renderEmptyState={() => <div className="py-[15px] px-[23px] text-sm w-full">No data</div>}
          >
            {(row) => (
              <Row className="border-t border-border-secondary dark:border-secondary-dark cursor-default focus-ring -outline-offset-2 rounded-xl">
                {isDraggable && (
                  <Cell className={bodyColStyles}>
                    <Button slot="drag" variant="link" className="cursor-pointer">
                      <Grip size={20} className="text-text-disabled dark:text-tertiary-dark-600" />
                    </Button>
                  </Cell>
                )}
                {showIndexes && <Cell className={bodyColStyles}>{itemOffset * itemsPerPage + row.id}</Cell>}
                {columns.map((col) => (
                  <Cell className={bodyColStyles} key={row.id + col.key}>
                    {col?.render ? col.render(row) : row[col.key]}
                  </Cell>
                ))}
              </Row>
            )}
          </TableBody>
        )}
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
