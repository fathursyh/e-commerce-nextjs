import { AxiosError } from "axios";
import type { PaginationResponse, SingleResponse } from "../shared/models";

export function catchErrorResponse(error: unknown):
SingleResponse<unknown> | PaginationResponse<unknown>
{
    let message = "Something is wrong";
    if (error instanceof AxiosError) {
        message = error.message;
    } else {
        console.error("Unknown error:", error);
    }
    return {
        data: [],
        success: false,
        pagination: { current_page: 0, last_page: 0, total: 0, from: 0, to: 0, per_page: 0 },
        message: message,
    };
}