import { Tabs } from "../../components";

export const Home = () => {
  return (
    <div>
      <Tabs defaultValue="react">
        <Tabs.Tab label="react">React</Tabs.Tab>
        <Tabs.Tab label="vue">Vue</Tabs.Tab>
        <Tabs.Tab label="angular">Angular</Tabs.Tab>

        <Tabs.Panel label="react">
          React
        </Tabs.Panel>
        <Tabs.Panel label="vue">
          Vue
        </Tabs.Panel>
        <Tabs.Panel label="angular">
          Angular
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
