import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../components/ui/carousel"
   
const FeaturedArticleCarousal = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnMouseEnter: true })
    )


    return (
        <>
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="">
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card className="h-[40vh] sm:h-[60vh] bg-white">
                            <CardContent className="flex relative items-center p-0 justify-center h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                    alt="Photo by Drew Beamer"
                                    className="h-full w-full rounded-md object-cover"
                                />
                                <p className="absolute top-1/2 font-semibold">{index + 1}</p>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}

export default FeaturedArticleCarousal