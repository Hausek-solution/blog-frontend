import { useCallback, useEffect, useState } from "react"
import BlogPostCard, { DummyBlogType } from "../components/home/blog-post-card"

import { RecentArticleResponse, RecentArticles } from "../types/article-type"
import { getArticlesBasedOnCategories } from "../request/article-request"
import { AxiosResponse } from "axios"
import { Pagination } from "./blog-list"
import { LucideLoaderCircle } from "lucide-react"
   
const ResearchInsightPage = () => {
    const [researchArticles, setResearchArticles] = useState<RecentArticleResponse[]>([])
    const [loadingResearch, setLoadingResearch] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(0)
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

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

    const handlePageChange = useCallback((newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setLimit(newPage);
        }
    }, [totalPages]);

    useEffect(()  => {
        fetchResearchArticle().then()
    }, [])
    
    return (
        <>
            <div className="mt-10">
                <div className="h-44 w-full bg-cover bg-blog-header-bg bg-top">
                    <div className="blog-container flex items-center h-full">
                        <div className="flex items-center text-4xl font-bold text-primary">Research Insight</div>
                    </div>
                </div>

                { loadingResearch ?
                    <div className="flex items-center min-h-[50vh] justify-center">
                        <LucideLoaderCircle size={30} className="animate-spin"/>
                    </div> :

                    <div className="blog-container flex flex-col gap-16 my-20">
                        { researchArticles.map((_, index) => {
                            return (
                                <BlogPostCard
                                    content={_.short_content}
                                    date={_.updated_at}
                                    img={_.featured_image}
                                    slug={_.slug}
                                    title={_.title}
                                    key={index}
                                    type="blog"
                                />
                            )
                        })}
                    </div>
                }
                
                <div className="mb-20 mini:pt-10 blog-container">
                    <div className="">
                        <Pagination
                            currentPage={page}
                            onPageChange={handlePageChange}
                            limit={limit}
                            totalItems={totalPages}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResearchInsightPage