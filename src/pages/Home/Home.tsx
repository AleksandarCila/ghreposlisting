import { RepoPanel, Tabs } from "../../components";

import './Home.styles.css'

export const Home = () => {
  return (
    <div className="page-container">
      <Tabs defaultValue="react">
        <Tabs.TabButtons>
          <Tabs.Tab label="react">React</Tabs.Tab>
          <Tabs.Tab label="vue">Vue</Tabs.Tab>
          <Tabs.Tab label="angular">Angular</Tabs.Tab>
        </Tabs.TabButtons>
        <Tabs.Panel label="react">
          <RepoPanel apiUrl="https://api.github.com/search/repositories?q=React" />
        </Tabs.Panel>
        <Tabs.Panel label="vue">
          <RepoPanel apiUrl="https://api.github.com/search/repositories?q=Vue" />
        </Tabs.Panel>
        <Tabs.Panel label="angular">
          <RepoPanel apiUrl="https://api.github.com/search/repositories?q=Angular" />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
