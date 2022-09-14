import { FC, useEffect, useContext } from 'react';
import { AuthContext } from '../../auth';
import { useSocket } from '../../hooks/socket/useSocket';
import { ChatContext } from '../chat';
import { SocketContext } from './SocketContext';
import { scrollToBottomAnimated } from '../../helpers/scrollToBottom';

export const SocketProvider: FC = ({children}) => {

    const baseURLSocket = import.meta.env.VITE_APP_API_URL_SOCKET || 'http://localhost:8081'
    
    const { online, socket, connectSocket, disconnectSocket } = useSocket(baseURLSocket);
    const { auth } = useContext(AuthContext)
    const { getUsers, newMessage } = useContext(ChatContext)

    useEffect(() => {
        if (auth.logged) {
            connectSocket();
        }
    }, [auth, connectSocket])

    useEffect(() => {
        if (!auth.logged) {
            disconnectSocket();
        }
    }, [auth, disconnectSocket])

    //* Escuchar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on('users_list', (users) => {
            // dispatch({ type: '[Chat] - GET USERS', payload: users })
            getUsers(users)
        })
    }, [socket])

    //* Escuchar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on('personal_message', (message) => {
            newMessage(message)

            scrollToBottomAnimated('messages')
        })
    }, [socket])

    return (
        <SocketContext.Provider value={{
            online,
            socket,
        }}>
            { children }
        </SocketContext.Provider>
    )
}