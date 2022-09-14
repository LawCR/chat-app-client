import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth'

interface Props {
    children: JSX.Element
}

export const PublicRoute = ({children}: Props) => {
    const { auth } = useContext(AuthContext)

    return auth.logged 
    ? <Navigate to='/' /> 
    : children
}
