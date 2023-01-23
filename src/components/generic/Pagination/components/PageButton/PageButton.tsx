import { FC } from "react";

import "./PageButtons.styles.css";

type PageButtonProps = {
  label: string;
  disabled?: boolean;
};

export const PageButton: FC<PageButtonProps> = ({
  label,
  disabled = false,
}) => {
  const isDisabled = disabled ? "disabled" : "";
  return <div className={`pageButton ${isDisabled}`}>{label}</div>;
};
