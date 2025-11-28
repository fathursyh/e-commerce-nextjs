"use client";

import { useCartStore } from "@/app/providers/cart-store-provider";
import { ShoppingCart } from "lucide-react";

export default function CartHeader() {
    const { getTotalQty, items } = useCartStore(state => state);
      return (
        <div className="dropdown dropdown-end">
            <div tabIndex={ 0 } role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="badge badge-sm badge-primary indicator-item">{ items.length }</span>
                </div>
            </div>
            <div tabIndex={ 0 } className="mt-3 z-1 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">{ getTotalQty() } Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
}