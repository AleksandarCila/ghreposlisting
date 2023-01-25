import * as React from "react";
import { useSearchParams } from "react-router-dom";

import { Tab, Panel, TabButtons } from "./components";

import { TabsProps, TabsComposition } from "./types";

import { TabsContext, TabsContextType } from "./context";

import "./Tabs.styles.css";

const Tabs: React.FC<TabsProps> & TabsComposition = ({
  defaultValue,
  children,
}) => {
  const [search,setSearch] = useSearchParams();
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const handleTabChange = React.useCallback((newTab:string) => {
    const newParams = new URLSearchParams(search);
    newParams.set('page','1');
    setSearch(newParams)
    setActiveTab(newTab);
  },[setSearch,search,setActiveTab])

  const memoizedContextValue: TabsContextType = React.useMemo(
    () => ({
      activeTab,
      setActiveTab:handleTabChange,
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
