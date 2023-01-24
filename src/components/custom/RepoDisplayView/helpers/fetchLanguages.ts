import { fetchFrom } from "../../../../utils";

import { LanguagesEndpointType } from "../types";

export const fetchLanguages = async (baseUrl:string) => {
    const url = `${baseUrl}/languages`
    return fetchFrom<LanguagesEndpointType>(url);
}