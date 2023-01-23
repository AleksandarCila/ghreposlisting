import { FC } from "react";

import "./PageButtons.styles.css";

type PageButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

export const PageButton: FC<PageButtonProps> = ({
  label,
  disabled = false,
  onClick,
}) => {
  const isDisabled = disabled ? "disabled" : "";
  return (
    <div className={`pageButton ${isDisabled}`} onClick={onClick}>
      {label}
    </div>
  );
};
