import { useEffect } from "react"
import BlogPostCard, { DummyBlogType } from "../components/home/blog-post-card"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../components/ui/pagination"
   

const dummyBlogPost: DummyBlogType[] = [
    {
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae harum autem quo voluptatum necessitatibus, inventore omnis repellendus, natus magnam excepturi 
        aliquid quam. Voluptate praesentium provident minus atque aspernatur reiciendis? Sequi vitae repudiandae eum nam esse aut quaerat illo optio deleniti odio ullam sapiente hic quae et sint, 
        corrupti voluptates dolor quia eos atque ipsam error voluptas molestiae fugit. Officiis.`,
        date: 'December 12, 2023',
        img: "/images/dummy/blog2.jpg",
        slug: 'an-article-on-i-do-not-know',
        title: "Saving for your dream house: Strategies for Low and Middle-Income Earners"
    },
    {
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae harum autem quo voluptatum necessitatibus, inventore omnis repellendus, natus magnam excepturi 
        aliquid quam. Voluptate praesentium provident minus atque aspernatur reiciendis? Sequi vitae repudiandae eum nam esse aut quaerat illo optio deleniti odio ullam sapiente hic quae et sint, 
        corrupti voluptates dolor quia eos atque ipsam error voluptas molestiae fugit. Officiis.`,
        date: 'December 12, 2023',
        img: "/images/dummy/dummy.jpg",
        slug: 'an-article-on-i-do-not-know',
        title: "Saving for your dream house: Strategies for Low and Middle-Income Earners"
    },
    {
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae harum autem quo voluptatum necessitatibus, inventore omnis repellendus, natus magnam excepturi 
        aliquid quam. Voluptate praesentium provident minus atque aspernatur reiciendis? Sequi vitae repudiandae eum nam esse aut quaerat illo optio deleniti odio ullam sapiente hic quae et sint, 
        corrupti voluptates dolor quia eos atque ipsam error voluptas molestiae fugit. Officiis.`,
        date: 'December 12, 2023',
        img: "/images/dummy/blog2.jpg",
        slug: 'an-article-on-i-do-not-know',
        title: "Saving for your dream house: Strategies for Low and Middle-Income Earners"
    },
]

const ResearchInsightPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <>
            <div className="mt-10">
                <div className="h-44 w-full bg-cover bg-blog-header-bg bg-top">
                    <div className="blog-container flex items-center h-full">
                        <div className="flex items-center text-4xl font-bold text-primary">Research Insight</div>
                    </div>
                </div>

                <div className="blog-container flex flex-col gap-16 my-20">
                    { dummyBlogPost.map((_, index) => {
                        return (
                            <BlogPostCard
                                content={_.content}
                                date={_.date}
                                img={_.img}
                                slug={_.slug}
                                title={_.title}
                                key={index}
                                type="research"
                            />
                        )
                    })}
                </div>
                
                <div className="mb-20">
                    <div className="">
                        <Pagination className="text-base">
                            <PaginationContent>
                                <PaginationItem>
                                <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResearchInsightPage