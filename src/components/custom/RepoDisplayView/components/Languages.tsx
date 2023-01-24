import { FC } from "react";
import { RepoDataDisplayType } from "../types";

type LanguagesProps = {
  languages: RepoDataDisplayType["languages"];
};

export const Languages: FC<LanguagesProps> = ({ languages }) => {
  return (
    <div className="languagesContainer">
      <div>Programming languages:</div>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>
            {language.name} - {language.percentage}%
          </li>
        ))}
      </ul>
    </div>
  );
};
