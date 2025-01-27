import { LucideFacebook, LucideInstagram, LucideLinkedin, LucideTwitter } from "lucide-react"

const Footer = () => {
    return (
        <>
            <div className="bg-primary py-4">
                <div className="app-container">
                    <div className="flex flex-col items-center sm:flex-row justify-between">
                        <p className="text-[#B8B08D] text-base font-medium">Copyright © 2025 Hausek</p>
                 
                        <div className="text-[#B8B08D] mt-3 flex items-center space-x-5">
                            <LucideFacebook/>
                            <LucideLinkedin/>
                            <LucideInstagram/>
                            <LucideTwitter/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer