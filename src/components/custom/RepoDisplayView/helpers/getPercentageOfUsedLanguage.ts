import { LanguagesEndpointType } from "./../types";

const getPercentage = (value: number, totalValue: number): string => {
  return ((value / totalValue) * 100).toFixed(2);
};

export const getPercantageOfUsedLanguages = (
  languages: LanguagesEndpointType | undefined
) => {
  if (!languages) return [];
  
  const languageValues = Object.values(languages);
  const totalSum = languageValues.reduce((prev, curr) => (curr += prev));

  const languagesEntries = Object.entries(languages);
  return languagesEntries.map((language) => ({
    name: language[0],
    percentage: getPercentage(language[1], totalSum),
  }));
};
