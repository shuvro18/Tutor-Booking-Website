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
import Link from "next/link"


const bannerData = [
    {
        id: 1,
        title: "Master Any Subject with Expert Tutors",
        description: "Learn at your own pace with 1-on-1 guidance from top-tier academic professionals verified for excellence.",
        buttonText: "View All Tutors",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Unlock Your Potential",
        description: "Personalised learning paths designed to bridge the gap between knowledge and clinical expertise.",
        buttonText: "View All Tutors",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Book Flexible Sessions",
        description: "Schedule that fits your life. Connect with educators globally and manage your learning queue with ease.",
        buttonText: "View All Tutors",
        imageUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1200&auto=format&fit=crop"
    }
];





const Banner = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel

            // eslint-disable-next-line react-hooks/refs
            plugins={[plugin.current]}
            className="w-full mx-auto group"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
        >
            <div className="relative">
                <CarouselContent className="ml-0 ">
                    {
                        bannerData.map((item) => (

                            <CarouselItem key={item.id}
                                className="pl-0 basis-full"
                            >
                                <div className="p-0 ">
                                    <Card>
                                        <CardContent
                                            style={{ backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.4)), url(${item.imageUrl})` }}
                                            className="flex h-150 items-center justify-center p-6 bg-pink-500">

                                            <div className="max-w-2xl text-white space-y-4 z-10">
                                                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                                                    {item.title}
                                                </h1>
                                                <p className="text-sm md:text-lg text-gray-200">
                                                    {item.description}
                                                </p>
                                                <Link href={"/tutors"} className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium px-6 py-3 rounded-md transition-colors text-sm md:text-base">
                                                    {item.buttonText}
                                                </Link>
                                            </div>


                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>


                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2-translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-4 top-1/2-translate-y-1/2 z-10" />
            </div>
        </Carousel>
    )
};

export default Banner;