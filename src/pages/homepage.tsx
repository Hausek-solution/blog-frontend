import BlogCard from "../components/home/blog-card"
import FeaturedArticleCarousal from "../components/home/featured-article-carousal"
import LogoDark from "../components/icons/logo-dark"
import LogoLight from "../components/icons/logo-light"
import { Button } from "../components/ui/button"

import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDescription,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
  } from "../components/ui/timeline"

const HomePage = () => {
    return (
        <>
            <div className="text-text text-2xl app-container mt-20">
                <div className="">
                    <h1 className="text-center font-semibold text-xl sm:text-2xl md:text-3xl">Featured Articles</h1>
                </div>

                <div className="w-full mt-8">
                    <FeaturedArticleCarousal/>
                </div>

                {/* Blog articles */}
                <div className="mt-20">
                    <div className="">
                        <h2 className=" text-center text-primary underline underline-offset-4 uppercase font-semibold">Blog</h2>

                        <div className="mt-16 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-8">
                            <BlogCard
                                date="May 8, 2024"
                                img="/images/dummy/dummy3.jpg"
                                title="Healthy living habits from our community"
                            />

                            <BlogCard
                                date="May 8, 2024"
                                img="/images/dummy/dummy2.jpg"
                                title="Ways to improve living conditions"
                            />

                            <BlogCard
                                date="May 8, 2024"
                                img="/images/dummy/dummy.jpg"
                                title="Healthy living habits from our community"
                            />
                        </div>
                        
                        <div className="justify-center flex mt-8">
                            <Button className="bg-primary text-white text-base font-medium px-7 rounded-lg py-6">View more Blogs</Button>
                        </div>
                    </div>
                </div>

                {/* Research articles */}
                <div className="mt-20 sm:mt-28">
                    <div className="">
                        <h2 className=" text-center text-primary underline underline-offset-4 uppercase font-semibold">Research Insight</h2>

                        <div className="mt-16 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-8">
                            <BlogCard
                                date="May 8, 2024"
                                img="/images/dummy/dummy3.jpg"
                                title="Healthy living habits from our community"
                            />

                            <BlogCard
                                date="May 8, 2024"
                                img="/images/dummy/dummy2.jpg"
                                title="Ways to improve living conditions"
                            />

                            <BlogCard
                                date="May 8, 2024"
                                img="/images/dummy/dummy.jpg"
                                title="Healthy living habits from our community"
                            />
                        </div>
                        
                        <div className="justify-center flex mt-8">
                            <Button className="bg-primary text-white text-base font-medium px-7 rounded-lg py-6">View more Research Insight</Button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Recent */}
            <div className="mx-auto w-full max-w-screen-xl px-5 ipad:px-12 mini:px-16 mb-24">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-28">
                    <div className="">
                        <h2 className="text-primary underline underline-offset-4 text-xl font-semibold">Recent posts</h2>

                        <div className="mt-12">
                            <Timeline>
                                <TimelineItem className="hover:cursor-pointer">
                                    <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                    <TimelineTitle className=" text-sm">January 25, 2025</TimelineTitle>
                                    <TimelineDescription className="text-xl text-primary">Because you need strength</TimelineDescription>
                                    </TimelineContent>
                                </TimelineItem>

                                <TimelineItem className="hover:cursor-pointer">
                                    <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                    <TimelineTitle className=" text-sm">January 25, 2025</TimelineTitle>
                                    <TimelineDescription className="text-xl text-primary">The magic of believing in dreams that the universe knows</TimelineDescription>
                                    </TimelineContent>
                                </TimelineItem>

                                <TimelineItem className="hover:cursor-pointer">
                                    <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                    <TimelineTitle className=" text-sm">January 25, 2025</TimelineTitle>
                                    <TimelineDescription className="text-xl text-primary">Nigerian locality and research for new agencies</TimelineDescription>
                                    </TimelineContent>
                                </TimelineItem>

                                <TimelineItem className="hover:cursor-pointer">
                                    <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                    <TimelineTitle className=" text-sm">January 25, 2025</TimelineTitle>
                                    <TimelineDescription className="text-xl text-primary">The end of the timeline news</TimelineDescription>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline> 
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-primary underline underline-offset-4 text-xl  font-semibold">Recently updated</h2>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                            <img
                                src={"/images/dummy/dummy3.jpg"}
                                alt="Photo by Drew Beamer"
                                className="h-full w-full rounded-md object-cover hover:cursor-pointer"
                            />

                            <img
                                src={"/images/dummy/dummy2.jpg"}
                                alt="Photo by Drew Beamer"
                                className="h-full w-full rounded-md object-cover hover:cursor-pointer"
                            />

                            <img
                                src={"/images/dummy/dummy3.jpg"}
                                alt="Photo by Drew Beamer"
                                className="h-full w-full rounded-md object-cover hover:cursor-pointer"
                            />

                            <img
                                src={"/images/dummy/dummy.jpg"}
                                alt="Photo by Drew Beamer"
                                className="h-full w-full rounded-md object-cover hover:cursor-pointer"
                            />

                            <img
                                src={"/images/dummy/dummy3.jpg"}
                                alt="Photo by Drew Beamer"
                                className="h-full w-full rounded-md object-cover hover:cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HomePage