import { ContributorsEndpointType } from '../types';

export const fetchContributors = async (baseUrl:string) => {
    if (!baseUrl) throw Error(`Error: ${baseUrl} is not correct`);
    const url = `${baseUrl}/contributors?per_page=10`
    const response = await fetch(url);
    if (!response.ok) throw Error(`Error:${response.status}`);

    return response.json() as Promise<ContributorsEndpointType>
}