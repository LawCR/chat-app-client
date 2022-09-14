import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth'

interface Props {
    children: JSX.Element
}

export const PrivateRoute = ({children}: Props) => {
    const { auth } = useContext(AuthContext)

    return auth.logged 
    ? children
    : <Navigate to='/auth' /> 
}
