/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosRequestConfig } from "axios";
import { api } from "../lib/axios";
import { catchErrorResponse } from "../utils/error";

interface QueryModel {
    /** @property Key for query */
    key?: string
    /** @method Call api */
    call: (...args: any) => any;
};

const config: AxiosRequestConfig = {
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "X-Client-Type": "web",
    },
};

/** @async Un-handled error fetching call */
async function fetch<T>(url: string): Promise<T> {
    const res = await api.get(url, config);
    return res.data;
}

/** @async Mutation call for `POST`, `PUT`, `PATCH`, and `DELETE` */
async function mutate<T>(
    url: string,
    payload: T,
    method: "POST" | "PUT" | "PATCH" | "DELETE" = "POST",
): Promise<T> {
    return await api.post(url, payload, {
        method,
        timeout: 8000,
        ...config,
    });
}

/**
 * @async Handled error fetching call.
 * @description Handled query when calling api using Tanstack `useSuspenseQuery`
 * and React `Suspense` template
 */
async function handledFetch<T>(url: string): Promise<T> {
    try {
        const res = await api.get(url, config);
        return res.data;
    } catch (error) {
        return catchErrorResponse(error);
    }
}

export {
    type QueryModel,
    fetch,
    mutate,
    handledFetch,
};