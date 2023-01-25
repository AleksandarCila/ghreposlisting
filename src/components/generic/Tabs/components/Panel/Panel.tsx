import { FC } from "react";
import { useTabs } from "../../hooks";

export type PanelProps = {
  label: string;
  children?: React.ReactNode;
};

export const Panel: FC<PanelProps> = ({ label, children }) => {
  const { activeTab } = useTabs();
  return activeTab === label ? <div>{children}</div> : null;
};
