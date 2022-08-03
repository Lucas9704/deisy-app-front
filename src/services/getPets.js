import {API} from "./api";

export function getPets(size = 8, page = 0)    {
    return API.get(`pets?size=${size}&page=${page}`);
}