import { Button } from "./ui/button"
import { Input } from "./ui/input"

const SubscribeEmail = () => {
    return (
        <>
            <div className="bg-primary flex md:items-center flex-col py-10 gap-y-8 w-full mini:flex-row mini:py-20 px-10">
                <p className="text-[#B8B08D] text-3xl text-center mini:text-left mini:w-1/2 leading-[40px]">"Find Your Perfect Space—Get Rental Tips & Roommate Insights!"</p>

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="flex w-full mini:max-w-sm items-center flex-col sm:flex-row md:justify-center space-y-2 sm:space-x-2">
                        <Input type="email" placeholder="Email" className="py-7 md:py-6 rounded-md"/>
                        <Button type="submit" className="bg-background hover:bg-background w-full sm:w-max">Subscribe</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscribeEmail