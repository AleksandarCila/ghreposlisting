import { useState, FC, useMemo } from "react";

import { Tab, Panel, TabButtons } from "./components";

import { useSetSearchParamsByTab } from "./hooks";

import { TabsProps, TabsComposition } from "./types";

import { TabsContext, TabsContextType } from "./context";

const Tabs: FC<TabsProps> & TabsComposition = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const { handleTabChange } = useSetSearchParamsByTab(setActiveTab);

  const memoizedContextValue: TabsContextType = useMemo(
    () => ({
      activeTab,
      setActiveTab: handleTabChange,
    }),
    [activeTab, handleTabChange]
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
