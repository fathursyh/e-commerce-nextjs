/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../lib/axios";
import { catchErrorResponse } from "../utils/error";

interface QueryModel {
    key: string
    get: (...args: any) => any;
};

/** @async Un-handled error fetching call */
async function fetch<T>(url: string): Promise<T> {
    const res = await api.get(url);
    return res.data;
}

/** @async Handled error fetching call */
async function handledFetch<T>(url: string): Promise<T> {
    try {
        const res = await api.get(url);
        return res.data;
    } catch (error) {
        return catchErrorResponse(error);
    }
}

export {
    type QueryModel,
    fetch,
    handledFetch,
};