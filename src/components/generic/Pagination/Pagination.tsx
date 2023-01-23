import { FC } from "react";

import { PageButton } from "./components";

type PaginationProps = {
  currPage: number;
  totalItems: number;
  limitPerPage: number;
  onClick: (pageIncrease: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  currPage,
  totalItems,
  limitPerPage,
  onClick,
}) => {
  const numberOfPages = Math.ceil(totalItems / limitPerPage);

  const handlePreviousPage = () => {
    onClick(-1);
  };

  const handleNextPage = () => {
    onClick(+1);
  };

  return (
    <div>
      <PageButton
        label="〈 Previous Page "
        disabled={currPage === 1}
        onClick={handlePreviousPage}
      />
      <PageButton
        label="Next Page 〉"
        disabled={currPage === numberOfPages}
        onClick={handleNextPage}
      />
    </div>
  );
};
