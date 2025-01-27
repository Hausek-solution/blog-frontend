type BlogProps = {
    title: string,
    date: string,
    img: string
}

const BlogCard = ({date, img, title}: BlogProps) => {
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

                <div className="min-h-32 p-2 px-4 relative">
                    <p className="font-semibold text-primary">{title}</p>

                    <div className="flex justify-between items-center pt-1 absolute w-full bottom-0 left-0 px-4 py-4">
                        <p className="text-sm text-gray-500">{date}</p>
                        <p className="text-base text-secondary font-medium">Continue Reading</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard