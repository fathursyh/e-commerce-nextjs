import type { ArrayResponse, Product, SingleResponse } from "../shared/models";
import { fetch, handledFetch, type QueryModel } from "./helper";

const productQuery= {
    /** Featured products */
    featured: {
        key: "featured-products",
        get: () => handledFetch<ArrayResponse<Product>>("/products/featured"),
    },
    /** All products */
    all: {
        key: "all-products",
        get: () => fetch<ArrayResponse<Product>>("/products"),
    },
    /** Product detail by id */
    detail: {
        key: "product-detail",
        get: (id: string) => fetch<SingleResponse<Product>>("/products/" + id),
    },
} satisfies Record<string, QueryModel>;

export {
    productQuery,
};