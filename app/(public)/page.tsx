import { Filter } from "lucide-react";
import FeaturedProducts from "./components/featured-products";
import { Suspense } from "react";

export default async function HomePage() {
    return (
        <div className="min-h-screen bg-base-100 font-sans">
            <main className="container mx-auto px-4 pt-24">
                <Hero />
                { /* Filters / Header Section */ }
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className="text-3xl font-bold">Featured Products</h2>
                    <div className="flex gap-2">
                        <button className="btn btn-outline btn-sm">
                            <Filter className="w-4 h-4 mr-2" /> Filter
                        </button>
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            <option disabled>Sort by</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>

                { /* Product Grid */ }
                <Suspense fallback={
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            Array.from({ length: 12 }).map((item, i) => (
                                <ProductSkeleton key={ i } />
                            ))
                        }
                    </div>
                }>
                    <FeaturedProducts />
                </Suspense>
            </main>

            { /* Simple Footer */ }
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by DaisyShop Ltd</p>
                </aside>
            </footer>
        </div>
    );
}

const ProductSkeleton = () => (
    <div className="card bg-base-100 shadow-xl h-96">
        <figure className="h-48 w-full bg-base-300 animate-pulse" />
        <div className="card-body">
            <div className="h-4 bg-base-300 rounded w-3/4 animate-pulse mb-2" />
            <div className="h-3 bg-base-300 rounded w-1/2 animate-pulse mb-4" />
            <div className="flex gap-2 mb-4">
                <div className="h-6 w-16 bg-base-300 rounded animate-pulse" />
                <div className="h-6 w-16 bg-base-300 rounded animate-pulse" />
            </div>
            <div className="mt-auto flex justify-between items-center">
                <div className="h-6 w-20 bg-base-300 rounded animate-pulse" />
                <div className="h-10 w-24 bg-base-300 rounded animate-pulse" />
            </div>
        </div>
    </div>
);


const Hero = () => (
    <div className="hero min-h-[400px] bg-base-200 rounded-box mb-10" style={ { backgroundImage: "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80)" } }>
        <div className="hero-overlay bg-opacity-60 rounded-box" />
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">Summer Sale</h1>
                <p className="mb-5 text-white">Up to 50% off on selected items. Upgrade your style with our premium collection today.</p>
                <button className="btn btn-primary">Shop Now</button>
            </div>
        </div>
    </div>
);