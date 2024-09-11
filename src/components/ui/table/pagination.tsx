import React, { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";

import { Button } from "../button";

interface IPagination {
  itemOffset?: number;
  setItemOffset?: Dispatch<SetStateAction<number>>;
  itemsPerPage?: number;
  totalCount?: number;
}

export default function Pagination({ itemsPerPage = 3, totalCount = 0, setItemOffset, itemOffset = 0 }: IPagination) {
  return (
    <div className="sticky left-0 flex items-center justify-between py-3.5 px-6 border-t border-border-secondary dark:border-secondary-dark w-full">
      <Button
        isDisabled={itemOffset === 0}
        size="sm"
        variant="secondary"
        onPress={() => setItemOffset?.((p) => (p > 0 ? p - 1 : p))}
      >
        Previous
      </Button>
      <ReactPaginate
        breakLabel="..."
        onPageChange={({ selected }) => setItemOffset?.(selected)}
        pageLinkClassName="size-10 inline-block focus-ring rounded-md flex items-center justify-center hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-md"
        breakLinkClassName="focus-ring rounded-md size-10 inline-block flex items-center justify-center"
        activeLinkClassName="bg-secondary-light dark:bg-secondary-dark"
        className="w-[292px] flex justify-between items-center gap-0.5"
        forcePage={itemOffset}
        pageRangeDisplayed={1}
        pageCount={Math.ceil(totalCount / itemsPerPage)}
        nextLabel={null}
        previousLabel={null}
        renderOnZeroPageCount={null}
      />
      <Button
        isDisabled={(itemOffset + 1) * itemsPerPage === totalCount}
        size="sm"
        variant="secondary"
        onPress={() => setItemOffset?.((p) => (p < totalCount ? p + 1 : p))}
      >
        Next
      </Button>
    </div>
  );
}
