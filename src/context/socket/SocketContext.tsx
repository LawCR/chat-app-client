import { createContext } from 'react';
import { Socket } from "socket.io-client";
import { Message } from '../../interfaces/Message';
import { User } from '../../interfaces/user';
// import { BandType, NameBandType } from '../interfaces/Band';

export interface ServerToClientEvents {
    users_list: (users: User[]) => void
    personal_message: (message: Message) => void;
}

export interface ClientToServerEvents {
    // change_name_band: (data: BandType) => void;
    personal_message: (message: Message) => void;
}

interface ContextProps {
    online: boolean;
    socket: Socket<ServerToClientEvents, ClientToServerEvents> | null,
}

export const SocketContext = createContext({} as ContextProps)