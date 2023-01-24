import { FC } from "react";

import { RepoDataDisplayType } from "../../types";

import "./LanguagesList.styles.css";

type LanguagesListProps = {
  languages: RepoDataDisplayType["languages"];
};

export const LanguagesList: FC<LanguagesListProps> = ({ languages }) => {
  return (
    <div className="languagesContainer">
      <div className="title">Programming languages:</div>
      <div className="languageList">
        {languages.map((language) => (
          <div key={language.name}>
            {language.name} - {language.percentage}%
          </div>
        ))}
      </div>
    </div>
  );
};
