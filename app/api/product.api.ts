import type { ArrayResponse, Product, SingleResponse } from "../shared/models";
import { fetch, handledFetch, type QueryModel } from "./helper";

/** @instance Object containing products related api queries. */
const PRODUCT_QUERY = {
    /** @property Featured products. */
    featured: {
        key: "featured-products",
        call: () => handledFetch<ArrayResponse<Product>>("/products/featured"),
    },
    /** @property All products. */
    all: {
        key: "all-products",
        call: () => fetch<ArrayResponse<Product>>("/products"),
    },
    /** @property Product detail by id. */
    detail: {
        key: "product-detail",
        call: (id: string) => fetch<SingleResponse<Product>>("/products/" + id),
    },
} satisfies Record<string, QueryModel>;

export {
    PRODUCT_QUERY,
};