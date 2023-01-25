import { FC } from "react";
import { useTabs } from "../../hooks";

import "./Tab.styles.css";

export type TabProps = {
  label: string;
  children?: React.ReactNode;
};

export const Tab: FC<TabProps> = ({ label, children }) => {
  const { activeTab, setActiveTab } = useTabs();

  const isActive = activeTab === label ? "active" : "";

  return (
    <div className={`tab ${isActive}`} onClick={() => setActiveTab(label)}>
      {children}
    </div>
  );
};
