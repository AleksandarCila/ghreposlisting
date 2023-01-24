import { fetchFrom } from '../../../../utils';

import { ContributorsEndpointType } from '../types';

export const fetchContributors = async (baseUrl:string) => {
    const url = `${baseUrl}/contributors?per_page=10`
    return fetchFrom<ContributorsEndpointType>(url);
}