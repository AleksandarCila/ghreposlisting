import { FC } from "react";

type PaginationInfoProps = {
  page: number;
  totalPages: number;
};

export const PaginationInfo: FC<PaginationInfoProps> = ({
  page,
  totalPages,
}) => {
  return (
    <div>
      Page <span>{page}</span> out of{" "}
      <span>{totalPages.toLocaleString("en-US")}</span>
    </div>
  );
};
