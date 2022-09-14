
import { createContext } from 'react';
import { Message } from '../../interfaces/Message';
import { User } from '../../interfaces/user';
import { ChatState } from './ChatProvider';
// import { ChatActionType } from './chatReducer';

interface ContextProps extends ChatState {
    // chatState: ChatState;
    // dispatch: React.Dispatch<ChatActionType>;
    getUsers: (users: User[]) => void;
    selectChat: (user: User) => void;
    newMessage: (message: Message) => void
    loadMessages: (messages: Message[]) => void
    reseatAfterExit: () => void
    toogleDarkMode: () => void
}

export const ChatContext = createContext({} as ContextProps)