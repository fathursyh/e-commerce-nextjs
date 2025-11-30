import { Button } from "@/components/ui/button";;
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FeaturedProducts from "./components/featured-products";

export default function HomePage() {
    return (
        <>
            <HeroCarousel />
            <FeaturedProducts />
        </>

    );
}

function HeroCarousel() {
    return (
        <div className="py-8">
            <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                    { heroEvents.map((event) => (
                        <CarouselItem key={ event.id }>
                            <div className="p-1">
                                <Card className={ `text-white shadow-xl ${event.color}` }>
                                    <CardContent className="flex flex-col items-center justify-center p-16 space-y-4">
                                        <h2 className="text-4xl font-extrabold">{ event.title }</h2>
                                        <p className="text-xl">{ event.description }</p>
                                        <Button variant="secondary" size="lg" className="mt-4 text-black font-semibold">
                                            { event.cta }
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )) }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

const heroEvents = [
    { id: 1, title: "Summer Sale!", description: "Up to 50% off on selected items.", color: "bg-red-500", cta: "Shop Now" },
    { id: 2, title: "New Arrivals", description: "Explore the latest collection today.", color: "bg-blue-500", cta: "See Collection" },
    { id: 3, title: "Flash Deals", description: "Limited time offers ending soon!", color: "bg-yellow-500", cta: "Grab Deal" },
];