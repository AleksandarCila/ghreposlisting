import { FC } from "react";

import './TabButtons.styles.css'

export type TabButtonsProps = {
  children?: React.ReactNode;
};

export const TabButtons: FC<TabButtonsProps> = ({ children }) => {
  return <div className="tabs">{children}</div>;
};
