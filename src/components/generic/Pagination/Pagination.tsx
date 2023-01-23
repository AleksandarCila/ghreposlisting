import { FC, useMemo } from "react";

import { PageButton } from "./components";

type PaginationProps = {
  totalItems: number;
  limitPerPage: number;
};

export const Pagination: FC<PaginationProps> = ({
  totalItems,
  limitPerPage,
}) => {
  const numberOfPages = Math.ceil(totalItems / limitPerPage);

  return (
    <div>
      <PageButton label="〈 Previous Page " disabled/>
      <PageButton label="Next Page 〉" />
    </div>
  );
};
