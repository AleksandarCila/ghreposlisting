import * as React from "react";
import { Tab, TabProps, Panel, PanelProps } from "./components";

import { TabsContext, TabsContextType } from "./context";

type TabsComposition = {
  Tab: React.FC<TabProps>;
  Panel: React.FC<PanelProps>;
};

type TabsProps = {
  defaultValue: string;
  children?: React.ReactNode;
};

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
      {children}
    </TabsContext.Provider>
  );
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;

export { Tabs };
