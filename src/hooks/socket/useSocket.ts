
import { useEffect, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../../context';

export const useSocket = (serverPath: string) => {

    // const sockets = useMemo(() => io(serverPath, { transports: ['websocket']}), [serverPath])
    const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null)

    const [online, setOnline] = useState(false)

    const connectSocket = useCallback(() => {

        const token = localStorage.getItem('token')

        const socketTemp = io(serverPath, { 
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'x-token': token
            }
        })
        setSocket(socketTemp)
    }, [serverPath] )

    const disconnectSocket = useCallback(() => {
        socket?.disconnect()
    }, [socket] )

    useEffect(() => {
        if (socket) {
            setOnline( socket.connected )
        }
    }, [socket])
    
    useEffect(() => {
        socket?.on('connect', () => {
            setOnline( true )
        })
    }, [socket])

    useEffect(() => {
        socket?.on('disconnect', () => {
            setOnline( false )
        })
    }, [socket])

    return {
        socket,
        online,
        connectSocket,
        disconnectSocket
    }
}