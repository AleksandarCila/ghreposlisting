import { FC } from "react";

import { PageButton, PaginationInfo } from "./components";

import "./Pagination.styles.css";

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
    <div className="pagination">
      <PageButton
        label="〈"
        disabled={currPage === 1}
        onClick={handlePreviousPage}
      />
      <PaginationInfo page={currPage} totalPages={numberOfPages} />
      <PageButton
        label="〉"
        disabled={currPage === numberOfPages}
        onClick={handleNextPage}
      />
    </div>
  );
};
