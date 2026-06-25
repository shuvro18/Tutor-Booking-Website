"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Banner = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full mx-auto group"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
        >
            <div className="relative">
                <CarouselContent className="ml-0 ">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}
                            className="pl-0 basis-full"
                        >
                            <div className="p-0 ">
                                <Card>
                                    <CardContent className="flex h-150 items-center justify-center p-6 bg-pink-500">
                                        <span className="text-4xl font-semibold">hello i am shuvro {index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2-translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-4 top-1/2-translate-y-1/2 z-10" />
            </div>
        </Carousel>
    )
};

export default Banner;