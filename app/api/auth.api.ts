import axios from "axios";
import type { LoginPayload, RegisterPayload, SingleResponse, User } from "../shared/models";
import { fetch, mutate, type QueryModel } from "./helper";

/** @instance Object containing auth related api. */
const AUTH_API = {
    /**
     *  @property Get backend session.
     *  Call when app first start, before register or login, and after session expired.
     */
    initSession: {
        call: async () => axios.get("http://localhost:8000/sanctum/csrf-cookie", { withCredentials: true }),
    },
    register: {
        call: async (payload: RegisterPayload) => mutate("/auth/register", payload),
    },
    login: {
        call: async (payload: LoginPayload) => mutate("/auth/login", payload),
    },
    /** @property Get authenticated user. */
    authenticatedUser: {
        call: () => fetch<SingleResponse<User>>("/auth/user"),
    },
    logout: {
        call: () => mutate("/auth/logout", null),
    },
} satisfies Record<string, QueryModel>;

export {
    AUTH_API,
};