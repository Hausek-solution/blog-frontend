import { LucideChevronsRight } from "lucide-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { ApplicationRoutes } from "../../routes/routes-constant"
import { formatDate } from "date-fns"

export type DummyBlogType = {
    title: string,
    date: string,
    slug: string,
    img: string,
    content: string,
    type?: 'blog' | 'research'
}


const BlogPostCard = ({
    content,
    date,
    img,
    slug,
    type,
    title
} : DummyBlogType) => {
    return (
        <>
            <div className="h-min flex flex-col gap-y-3 md:space-x-9 md:flex-row">
                <img
                    src={img}
                    alt="blog img"
                    className="md:w-1/4 rounded-md  object-cover peer h-60 hover:bg-black/20"
                />

                <div className="h-max md:w-2/4">
                    <p className="text-2xl font-medium">{title}</p>
                    <p className="text-secondary py-2">{formatDate(date, "PPP")}</p>

                    <p className="text-lg">{content.slice(0, content.lastIndexOf(" ", 150))}...</p>

                    <div className="mt-3">
                        <Link to={type === "blog" ? `${ApplicationRoutes.BLOG}/${slug}` : `${ApplicationRoutes.RESEARCH_INSIGHT}/${slug}`}>
                            <Button className="bg-primary text-white flex items-center space-x-2 rounded-lg">
                                <p className="">Continue Reading</p>
                                <LucideChevronsRight size={15}/>
                            </Button>
                        </Link>
                    </div>
                </div>  

            </div>
        </>
    )
}

export default BlogPostCard