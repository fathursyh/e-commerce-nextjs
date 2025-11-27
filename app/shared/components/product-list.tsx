"use client";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import { HOST_URL } from "@/app/utils/helper";
import { PaginationResponse, Product } from "@/app/shared/models";
import { catchErrorResponse } from "@/app/utils/error";

export default function ProductLists() {
    const { data: products } = useSuspenseQuery<PaginationResponse<Product>>({
        queryKey: ["posts"],
        queryFn: getProducts,
        retryOnMount: true,
    });
    if (!products.success) return null;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            { (
                products?.data.map((product: Product) => (
                    <ProductCard
                        key={ product.id }
                        product={ product }
                    />
                ))
            ) }
        </div>
    );
}

const ProductCard = ({ product }: { product: Product }) => (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
        <figure className="relative h-64 overflow-hidden">
            <Image
                src={ "https://cdn0-production-images-kly.akamaized.net/h9D1jOR9W_xMRWp4zOp1IGK371s=/500x667/smart/filters:quality(75):strip_icc()/kly-media-production/medias/5290158/original/010582300_1753091704-ChatGPT_Image_Jul_21__2025__04_42_16_PM.jpg" }
                alt={ product.name }
                width={ 1080 }
                height={ 800 }
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <button className="absolute top-2 left-2 btn btn-circle btn-sm btn-ghost bg-base-100/50 hover:bg-base-100 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-4 h-4" />
            </button>
        </figure>
        <div className="card-body">
            <div className="flex justify-between items-start">
                <h2 className="card-title text-base">{ product.name }</h2>
                <div className="flex items-center gap-1 text-yellow-500 text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>8</span>
                </div>
            </div>
            <p className="text-sm text-base-content/70 line-clamp-2">{ product.description }</p>

            <div className="card-actions justify-start mt-2">
                <div className="badge badge-outline">{ product.category?.name }</div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4">
                <div className="text-xl font-bold text-primary">${ product.price.toFixed(2) }</div>
                <button
                    className="btn btn-primary btn-sm"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
);

async function getProducts() {
    try {
        const res = await axios.get(`${HOST_URL}/products`);
        return res.data;
    } catch (error) {
        return catchErrorResponse(error);
    }
}