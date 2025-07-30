import { Link } from "react-router-dom"
import { ApplicationRoutes } from "../../routes/routes-constant"

type BlogProps = {
    title: string,
    date: string,
    img: string,
    slug: string,
    type: string
} 

const BlogCard = ({date, img, title, slug, type}: BlogProps) => {
    return (
        <>
            <div className="border-gray-300 border rounded-lg h-full cursor-pointer">
                <div className="min-h-56 relative bg-white rounded-tl-lg rounded-tr-lg">
                    <img
                        src={img}
                        alt="Photo by Drew Beamer"
                        className="h-full w-full rounded-md object-cover peer hover:bg-black/20"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20 hidden"></div>
                </div>

                <div className="min-h-32 p-2 pb-20 md:pb-0 px-4 relative">
                    <p className="font-semibold text-primary">{title}</p>

                    <div className="flex justify-between items-center pt-1 absolute w-full bottom-0 left-0 px-4 py-4">
                        <p className="text-sm text-gray-500">{date}</p>
                        <Link to={`${type == "blog" ? ApplicationRoutes.BLOG : ApplicationRoutes.RESEARCH_INSIGHT}/${slug}`} className="text-base text-secondary font-medium">Continue Reading</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard