import * as React from "react";
import { Tab, Panel, TabButtons } from "./components";

import { TabsProps, TabsComposition } from "./types";

import { TabsContext, TabsContextType } from "./context";

import "./Tabs.styles.css";

const Tabs: React.FC<TabsProps> & TabsComposition = ({
  defaultValue,
  children,
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const memoizedContextValue: TabsContextType = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab, setActiveTab]
  );

  return (
    <TabsContext.Provider value={memoizedContextValue}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;
Tabs.TabButtons = TabButtons;

export { Tabs };
