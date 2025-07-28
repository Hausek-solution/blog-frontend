import { Link } from "react-router-dom"
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
import { ApplicationRoutes } from "../routes/routes-constant"
import { useEffect, useState } from "react"
import { getArticlesBasedOnCategories, getRecentArticles, getRecentUpdated } from "../request/article-request"
import { AxiosResponse } from "axios"
import { RecentArticleResponse, RecentArticles } from "../types/article-type"
import { formatDate } from "date-fns"
import { LucideLoaderCircle } from "lucide-react"

const HomePage = () => {

    const [blogArticles, setblogArticles] = useState<RecentArticleResponse[]>([])
    const [researchArticles, setResearchArticles] = useState<RecentArticleResponse[]>([])
    const [recentArticles, setrecentArticles] = useState<RecentArticleResponse[]>([])
    const [recentUpdatedArticles, setrecentUpdatedArticles] = useState<RecentArticleResponse[]>([])
    const [loadingBlog, setLoadingBlog] = useState(false)
    const [loadingResearch, setLoadingResearch] = useState(false)

    const fetcBlogArticles = async () => {
        setLoadingBlog(true)
        const response  = await getArticlesBasedOnCategories(3, "blog", 1)
        const axiosRepsonse = response as AxiosResponse<RecentArticles, any>

        if (axiosRepsonse.status === 200) {
            setblogArticles(axiosRepsonse.data.items)
        } else {

        }
        setLoadingBlog(false)
    }

    const fetchResearchArticle = async () => {
        setLoadingResearch(true)
        const response  = await getArticlesBasedOnCategories(3, "research", 1)
        const axiosRepsonse = response as AxiosResponse<RecentArticles, any>

        if (axiosRepsonse.status === 200) {
            setResearchArticles(axiosRepsonse.data.items)
        } else {

        }
        setLoadingResearch(false)
    }

    const fetchRecentlyUpdated = async () => {
        setLoadingResearch(true)
        const response  = await getRecentUpdated(5)
        const axiosRepsonse = response as AxiosResponse<RecentArticles, any>

        if (axiosRepsonse.status === 200) {
            setrecentUpdatedArticles(axiosRepsonse.data.items)
        } else {

        }
        setLoadingResearch(false)
    }

    const fetchRecentArticle = async () => {
        setLoadingResearch(true)
        const response  = await getRecentArticles(4)
        const axiosRepsonse = response as AxiosResponse<RecentArticles, any>

        if (axiosRepsonse.status === 200) {
            setrecentArticles(axiosRepsonse.data.items)
        } else {

        }
        setLoadingResearch(false)
    }
    
    useEffect(() => {
        fetcBlogArticles().then()
        fetchResearchArticle().then()
        fetchRecentlyUpdated().then()
        fetchRecentArticle().then()
    }, [])
    return (
        <>
            { loadingBlog ?
                <div className="flex items-center min-h-[50vh] justify-center">
                    <LucideLoaderCircle size={34} className="animate-spin"/>
                </div> :

                <div className="text-text text-2xl app-container mt-20 overflow-x-hidden">
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
                                { blogArticles.length >  0 ? 
                                    blogArticles.map((_, index) => {
                                    return (
                                        <BlogCard
                                            date={formatDate(_.updated_at, "PPP")}
                                            img={_.featured_image}
                                            title={_.title}
                                            key={_.slug}
                                            slug={_.slug}
                                            type="blog"
                                        />
                                    )
                                }) : 
                                    <div className="">No articles currently</div>
                                }
                            </div>
                            
                            <div className="justify-center flex mt-8">
                                <Link to={ApplicationRoutes.BLOG}>                            
                                    <Button className="bg-primary text-white text-base font-medium px-7 rounded-lg py-6">View more Blogs</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Research articles */}
                    <div className="mt-20 sm:mt-28">
                        <div className="">
                            <h2 className=" text-center text-primary underline underline-offset-4 uppercase font-semibold">Research Insight</h2>

                            <div className="mt-16 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-8">
                            { researchArticles.length >  0 ? 
                                    researchArticles.map((_, index) => {
                                    return (
                                        <BlogCard
                                            date={formatDate(_.updated_at, "PPP")}
                                            img={_.featured_image}
                                            title={_.title}
                                            key={_.slug}
                                            slug={_.slug}
                                            type="research"
                                        />
                                    )
                                }) : 
                                    <div className="flex min-h-44 justify-center text-center w-full text-xl col-span-3">No articles currently</div>
                                }
                            </div>
                            
                            { researchArticles.length > 0 &&
                                <div className="justify-center flex mt-8">
                                    {/* <Button className="bg-primary text-white text-base font-medium px-7 rounded-lg py-6"></Button> */}
                                    <Link to={ApplicationRoutes.RESEARCH_INSIGHT}>                            
                                        <Button className="bg-primary text-white text-base font-medium px-7 rounded-lg py-6">View more Research Insight</Button>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            }

            {/* Recent */}
            <div className="mx-auto w-full max-w-screen-xl px-5 ipad:px-12 mini:px-16 mb-24">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-28">
                    <div className="">
                        <h2 className="text-primary underline underline-offset-4 text-xl font-semibold">Recent posts</h2>

                        <div className="mt-12">
                            <Timeline>
                                { recentArticles.map((_, index) => {
                                    return (
                                        <TimelineItem className="hover:cursor-pointer" key={_.id}>
                                            <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                            <TimelineTitle className=" text-sm">{formatDate(_.updated_at, "PPP")}</TimelineTitle>
                                            <TimelineDescription className="text-xl text-primary">{_.title}</TimelineDescription>
                                            </TimelineContent>
                                        </TimelineItem>
                                    )
                                })}
                            </Timeline> 
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-primary underline underline-offset-4 text-xl  font-semibold">Recently updated</h2>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                            { recentUpdatedArticles.map((_, index) => {
                                return (
                                    <img
                                        src={_.featured_image}
                                        alt={`${_.id}`}
                                        className="h-full w-full rounded-md object-cover hover:cursor-pointer"
                                        key={_.id}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HomePage