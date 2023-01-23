import * as React from "react";
import { useTabs } from "../../hooks";

export type TabProps = {
  label: string;
  children?: React.ReactNode;
};

export const Tab: React.FC<TabProps> = ({ label, children }) => {
  const { setActiveTab } = useTabs();
  return (
    <div className="tab">
      <button onClick={() => setActiveTab(label)}>{children}</button>
    </div>
  );
};
