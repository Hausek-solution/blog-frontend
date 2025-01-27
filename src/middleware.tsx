import { ReactNode, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ApplicationRoutes } from "./routes/routes-constant"

export const privateRoutes: string[] = [

]

const MiddlewareProvider = ({children}: {children: ReactNode}) => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
      const currentPath = location.pathname

      if (privateRoutes.includes(currentPath)){
        
      }
    }, [location, navigate])

   
    

    return children

}

export default MiddlewareProvider