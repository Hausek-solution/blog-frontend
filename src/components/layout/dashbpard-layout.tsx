import { ReactNode } from "react"
import Header from "../header/header"
import Footer from "../footer/footer"

const DashboardLayout = ({children}: {children: ReactNode}) => {

    return (
        <>
            <main className="font-outfit">
                <Header/>

                {children}

                <Footer/>
            </main>
        </>
    )
}

export default DashboardLayout