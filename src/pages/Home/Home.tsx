import { RepoList, Tabs } from "../../components";

export const Home = () => {
  return (
    <div>
      <Tabs defaultValue="react">
        <Tabs.Tab label="react">React</Tabs.Tab>
        <Tabs.Tab label="vue">Vue</Tabs.Tab>
        <Tabs.Tab label="angular">Angular</Tabs.Tab>

        <Tabs.Panel label="react">
          React
          <RepoList apiUrl="https://api.github.com/search/repositories?q=React" />
        </Tabs.Panel>
        <Tabs.Panel label="vue">
          Vue
          <RepoList apiUrl="https://api.github.com/search/repositories?q=Vue" />
        </Tabs.Panel>
        <Tabs.Panel label="angular">
          Angular
          <RepoList apiUrl="https://api.github.com/search/repositories?q=Angular" />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
