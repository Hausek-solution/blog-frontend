import { Link } from "react-router-dom"
import { ApplicationRoutes } from "../../routes/routes-constant"

type RelatedArticleProps = {
    img: string,
    date: string,
    title: string,
    slug: string,
    type: "blog" | "research"
}

const RelatedArticle = ({
    date,
    img,
    slug,
    title,
    type
}: RelatedArticleProps) => {
    return (
        <>
            <Link to={type === "blog" ? `${ApplicationRoutes.BLOG}/${slug}` : `${ApplicationRoutes.RESEARCH_INSIGHT}/${slug}`} className="group cursor-pointer">
                <div className="flex justify-center sm:block">
                    <img
                        src={img}
                        alt="blog img"
                        className="rounded-md  object-cover peer h-52 ipad:h-60"
                    />
                </div>
                <p className="text-primary text-base group-hover:text-secondary sm:text-left mt-2 text-center">{title}</p>
                <p className="text-xs mt-1 text-center sm:text-left">{date}</p>
            </Link>
        </>
    )
}

export default RelatedArticle