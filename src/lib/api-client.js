import {doFetch} from "./do-fetch";

export function* getProjects() {
    try {
        const requestParams = {
            method: 'GET',
            url: '/projects',
        }

        return yield doFetch(requestParams);
    } catch (error) {
        return error;
    }
}