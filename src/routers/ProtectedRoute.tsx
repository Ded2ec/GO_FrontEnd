import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

type ProtectedRouteProps = {
    redirectPath?: string,
    children: ReactNode,
}

// Read token from localStorage
const token = localStorage.getItem('access_token')

const ProtectedRoute = ({ 
    redirectPath = '/login', 
    children }: ProtectedRouteProps) => {
    return token ? <>{children}</> : <Navigate to={redirectPath} />
}

export default ProtectedRoute