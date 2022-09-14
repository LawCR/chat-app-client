import { createContext } from 'react';
import { AuthState } from './AuthProvider';

interface ContextProps {
    auth: AuthState,
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, lastname: string, email: string, password: string) => Promise<string> | Promise<true>;
    verifyToken: () => void;
    logout: () => void;
}

export const AuthContext = createContext({} as ContextProps)