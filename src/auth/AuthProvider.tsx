import { FC, useCallback, useState } from 'react';
import { fetchPublic, fetchPrivate } from '../helpers/fetch';
import { AuthContext } from './';

export interface AuthState {
    uid?: string | null;
    checking: boolean;
    logged: boolean;
    name?: string | null;
    lastname?: string | null;
    email?: string | null;
}

const AUTH_INITIAL_STATE: AuthState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    lastname: null,
    email: null,
}

export const AuthProvider: FC = ({children}) => {

    //const nameFunction = () => dispatch({type: ''}) 
    const [auth, setAuth] = useState(AUTH_INITIAL_STATE);

    const login = async(email: string, password: string): Promise<boolean> => {
        const resp = await fetchPublic('auth', {email, password}, 'POST');
        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                name: resp.user.name,
                lastname: resp.user.lastname,
                email: resp.user.email,
            });
        }

        return resp.ok
    }

    const register = async(name: string, lastname: string, email: string, password: string) => {
        const resp = await fetchPublic('auth/register', {name, lastname, email, password}, 'POST');
        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                name: resp.user.name,
                lastname: resp.user.lastname,
                email: resp.user.email,
            });
            return true
        }

        return resp.msg
    }

    const verifyToken = useCallback(async() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setAuth({
                checking: false,
                logged: false,
            });

            return false
        }

        const resp = await fetchPrivate('auth/renew');
        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                name: resp.user.name,
                lastname: resp.user.lastname,
                email: resp.user.email,
            });
            return true
        } else {
            setAuth({
                checking: false,
                logged: false,
            });
            return false
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            checking: false,
            logged: false,
        });
    }

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verifyToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}