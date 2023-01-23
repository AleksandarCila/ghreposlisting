import { useContext } from "react";

import { TabsContext, TabsContextType } from "../context";

export const useTabs = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("This component must be used within a <Tabs> component.");
  }
  return context;
};
