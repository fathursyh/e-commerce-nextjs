"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";

export default function FeaturedProducts() {

  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">🔥 Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        { featuredProducts.map((product) => (
          <Card key={ product.id } className="transition-shadow hover:shadow-lg">
            <CardHeader className="p-0">
              { /* Placeholder for Product Image */ }
              <div className={ "h-48 rounded-t-lg flex items-center justify-center bg-gray-100 text-gray-500 italic" }>
                 Product Image ({ product.image })
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-semibold truncate">{ product.name }</h3>
              <div className="flex items-center text-sm text-yellow-500">
                <Star className="w-4 h-4 fill-yellow-500 mr-1" />
                <span>{ product.rating }</span>
              </div>
              <p className="text-2xl font-bold text-primary">${ product.price.toFixed(2) }</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        )) }
      </div>
    </section>
  );
}

const featuredProducts = [
  { id: 1, name: "Premium Wireless Headset", price: 129.99, rating: 4.5, image: "headset" },
  { id: 2, name: "Slim Leather Wallet", price: 34.50, rating: 4.8, image: "wallet" },
  { id: 3, name: "Vintage Camera Tripod", price: 59.99, rating: 4.2, image: "tripod" },
  { id: 4, name: "Mechanical Keyboard RGB", price: 99.99, rating: 4.7, image: "keyboard" },
];