import { fetchFrom } from "../../../../utils";

import { RepoEndpointType } from "../types";

export const fetchRepository = async (baseUrl:string) => {
    const url = `${baseUrl}`
    return fetchFrom<RepoEndpointType>(url)
}