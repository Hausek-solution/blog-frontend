import {useEffect, useRef, useState} from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../components/ui/carousel"
import { getFeaturedArticles } from "../../request/article-request"
import { AxiosResponse } from "axios"
import { RecentArticles } from "../../types/article-type"
   
const FeaturedArticleCarousal = () => {

    const [article, setArticles] = useState<RecentArticles[]>([])
    const [loading, setLoading] = useState(false)

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnMouseEnter: true })
    )

    const fetchFeaturedArticles = async () => {
        setLoading(true)
        const response  = await getFeaturedArticles()
        const axiosRepsonse = response as AxiosResponse<RecentArticles[], any>

        if (axiosRepsonse.status === 200) {
            setArticles(axiosRepsonse.data)
        } else {

        }

        setLoading(false)
    }
    
    useEffect(() => {
        fetchFeaturedArticles().then()
    }, [])


    return (
        <>
            { article.length > 0 ?
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    // onMouseEnter={plugin.current.stop}
                    // onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="">
                        {article.map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card className="h-[40vh] sm:h-[60vh] bg-white relative">
                                <CardContent className="flex relative items-center p-0 justify-center h-full">
                                    <img
                                        src={_.featured_image}
                                        alt="Photo by Drew Beamer"
                                        className="h-full w-full rounded-md object-cover"
                                    />
                                    <p className="absolute top-1/2 font-semibold">{index + 1}</p>
                                </CardContent>

                                <div className="w-full h-[40vh] sm:h-[60vh] flex flex-col justify-end p-6 md:p-12 bg-black/30 absolute top-0 left-0 border-3 border-white">
                                    <div className="text-white max-w-2xl">
                                        <p className="font-semibold text-3xl md:text-5xl">{_.title}</p>
                                    </div>
                                </div>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel> :
                <div className="">No featured articles</div>
            }
        </>
    )
}

export default FeaturedArticleCarousal