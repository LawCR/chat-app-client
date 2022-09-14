import { useContext } from 'react';
import { BrowserRouter, HashRouter , Routes, Route } from "react-router-dom"
import { AuthRouter } from "./AuthRouter";
import { AuthContext } from "../auth";
import { useEffect } from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRoutes } from "./DashboardRoutes";
import { ChatContext } from '../context/chat';



export const AppRouter = () => {

    const { auth, verifyToken } = useContext(AuthContext)
    const { dark } = useContext(ChatContext)

    useEffect(() => {
        verifyToken()
    }, [verifyToken])

    if (auth.checking) {
        return <h1>Espere por favor</h1>
    }

    return (
        <div className={dark ? 'dark' : ''}>
            <HashRouter>
                <Routes>
                    {/* Rutas publicas sin autorización */}
                    <Route path="/auth/*" element={
                        <PublicRoute >
                            <AuthRouter />
                        </PublicRoute>
                    } />

                    {/* Rutas privadas con autorización */}
                    <Route path="/*" element={
                        <PrivateRoute >
                            <DashboardRoutes />
                        </PrivateRoute>
                    } />

                    
                    {/* <Route path='/*' element={<ChatPage />} /> */}
                </Routes>
            </HashRouter>
        </div>
    )
}
