export const fetchFrom = async <T>(url:string) => {
    if (!url) throw Error(`Error: ${url} is not correct`);
    const response = await fetch(url);
    if (!response.ok) throw Error(`Error:${response.status}`);

    return response.json() as Promise<T>
}