import { useCallback, useEffect, useState } from "react"
import BlogPostCard, { DummyBlogType } from "../components/home/blog-post-card"
import { RecentArticleResponse, RecentArticles } from "../types/article-type"
import { getArticlesBasedOnCategories } from "../request/article-request"
import { AxiosResponse } from "axios"
import LoadingSpinner from "../components/loader"
import { LucideLoaderCircle } from "lucide-react"
import { Button } from "../components/ui/button"



const BlogListPage = () => {
    const [blogArticles, setblogArticles] = useState<RecentArticleResponse[]>([])
    const [loadingBlog, setLoadingBlog] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(0)

    const fetchBlogArticles = async () => {
        setLoadingBlog(true)
        const response  = await getArticlesBasedOnCategories(limit, "blog", page)
        const axiosRepsonse = response as AxiosResponse<RecentArticles, any>

        if (axiosRepsonse.status === 200) {
            setblogArticles(axiosRepsonse.data.items)
            setTotalPages(axiosRepsonse.data.total_items)
            console.log(axiosRepsonse.data)
        } else {

        }
        setLoadingBlog(false)
    }

    useEffect(() => {
        fetchBlogArticles().then()
    }, [])


    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const handlePageChange = useCallback((newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setLimit(newPage);
        }
    }, [totalPages]);

    return (
        <>
            <div className="mt-10">
                <div className="h-44 w-full bg-cover bg-blog-header-bg bg-top">
                    <div className="blog-container flex items-center h-full">
                        <div className="flex items-center text-4xl font-bold text-primary">Blog</div>
                    </div>
                </div>

                { loadingBlog ?
                    <div className="flex items-center min-h-[50vh] justify-center">
                        <LucideLoaderCircle size={30} className="animate-spin"/>
                    </div> :

                    <div className="blog-container flex flex-col gap-16 my-20">
                        { blogArticles.map((_, index) => {
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

export default BlogListPage


type PaginationProps = {
    currentPage: number, 
    totalItems: number, 
    onPageChange: (page: number) => void,
    limit: number
}

export const Pagination = ({ currentPage, totalItems, onPageChange, limit }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / limit);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {

        if (currentPage < (totalPages)) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg mt-4">
            <Button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 
                            ${currentPage === 1 
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                                : 'bg-primary text-white shadow-sm'
                            } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
            >
                Previous
            </Button>
            <span className="text-base font-medium text-gray-600">
                Page {currentPage}
            </span>
            <Button
                onClick={handleNext}
                disabled={currentPage >= totalPages}
                className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 
                            ${currentPage >= totalPages 
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                                : 'bg-primary text-white shadow-sm'
                            } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
            >
                Next
            </Button>
        </div>
    );
};