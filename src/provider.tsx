import { ReactNode } from "react"
import MiddlewareProvider, { privateRoutes } from "./middleware"
import { Toaster } from "./components/ui/toaster"
import { useLocation } from "react-router-dom"
import DashboardLayout from "./components/layout/dashbpard-layout"


const Provider = ({ children }: {children: ReactNode}) => {
    const location = useLocation();

    return (
        <>
            <MiddlewareProvider>
                <DashboardLayout>
                    {children}
                </DashboardLayout>
            </MiddlewareProvider>
            <Toaster/>
        </>
    )
}

export default Provider