import { LanguagesEndpointType } from "../types";

export const fetchLanguages = async (baseUrl:string) => {
    if (!baseUrl) throw Error(`Error: ${baseUrl} is not correct`);
    const url = `${baseUrl}/languages`
    const response = await fetch(url);
    if (!response.ok) throw Error(`Error:${response.status}`);

    return response.json() as Promise<LanguagesEndpointType>
}