const END_POINT = 'localhost:3000';

export function* doFetch({
    method,
    url,
    data,
                         })
{
    const fullPath = END_POINT + url;
    let response = fetch(fullPath, {
        method,
    })
}