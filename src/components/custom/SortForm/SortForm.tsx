import { FC, ChangeEvent } from "react";

import { RadioButton } from "../../generic/RadioButton";
import { RepoPanelQueryState } from "../RepoPanel/types";

import "./SortForm.styles.css";

type SortFormProps = {
  sort: RepoPanelQueryState["sort"];
  onChange: (sort: RepoPanelQueryState["sort"]) => void;
};

export const SortForm: FC<SortFormProps> = ({ sort, onChange }) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    // @ts-ignore
    onChange(name);
  };

  return (
    <div className="sort-form">
      <span>Sort descending by: </span>
      <RadioButton
        name="stars"
        id="stars"
        value="Stars"
        text="Stars"
        onChange={handleOnChange}
        checked={sort === "stars"}
      />
      <RadioButton
        name="forks"
        id="forks"
        value="Forks"
        text="Forks"
        onChange={handleOnChange}
        checked={sort === "forks"}
      />
    </div>
  );
};
