import { RepoEndpointType } from "../types";

export const fetchRepository = async (baseUrl:string) => {
    if (!baseUrl) throw Error(`Error: ${baseUrl} is not correct`);
    const url = `${baseUrl}`
    const response = await fetch(url);
    if (!response.ok) throw Error(`Error:${response.status}`);

    return response.json() as Promise<RepoEndpointType>
}