import { TabProps, PanelProps, TabButtonsProps } from "./components";

export type TabsComposition = {
  Tab: React.FC<TabProps>;
  Panel: React.FC<PanelProps>;
  TabButtons: React.FC<TabButtonsProps>;
};

export type TabsProps = {
  defaultValue: string;
  children?: React.ReactNode;
};
