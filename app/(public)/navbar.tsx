import { Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import {  } from "next/navigation";

export default function Navbar({ cartCount }: { cartCount: number }) {
    return (
        <div className="navbar bg-base-100 shadow-md fixed top-0 z-50 px-4 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={ 0 } role="button" className="btn btn-ghost lg:hidden">
                        <Menu className="h-5 w-5" />
                    </div>
                    <ul tabIndex={ 0 } className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Products</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold tracking-tighter">Daisy<span className="text-primary">Shop</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={ "/" } className="font-medium">Home</Link></li>
                    <li><Link href={ "/products" } className="font-medium">Products</Link></li>
                    <li><Link href={ "/" } className="font-medium">Categories</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button className="btn btn-ghost btn-circle">
                    <Search className="h-5 w-5" />
                </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={ 0 } role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="badge badge-sm badge-primary indicator-item">{ cartCount }</span>
                        </div>
                    </div>
                    <div tabIndex={ 0 } className="mt-3 z-1 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{ cartCount } Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}