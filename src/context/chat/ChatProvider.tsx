import { FC, useReducer } from 'react';
import { Message } from '../../interfaces/Message';
import { User } from '../../interfaces/user';
import { ChatContext, chatReducer } from './';

export interface ChatState {
    uid: string;
    activeChat: User | null; // UID del usuario al que le estoy escribiendo
    users: User[], 
    messages: Message[], // El chat seleccionado
    dark: boolean,
}

const CHAT_INITIAL_STATE: ChatState = {
    uid: '',
    activeChat: null,
    users: [],
    messages: [],
    dark: false,
}

export const ChatProvider: FC = ({children}) => {

    const [chatState, dispatch] = useReducer(chatReducer, CHAT_INITIAL_STATE)

    const getUsers = (users: User[]) => dispatch(
        {type: '[Chat] - GET USERS', payload: users}
    ) 

    const selectChat = (user: User) => dispatch(
        {type: '[Chat] - SELECT USER', payload: user}
    ) 

    const newMessage = (message: Message) => dispatch(
        {type: '[Chat] - NEW MESSAGE', payload: message}
    ) 

    const loadMessages = (messages: Message[]) => dispatch(
        {type: '[Chat] - LOAD MESSAGES', payload: messages}
    ) 
    const reseatAfterExit = () => dispatch(
        {type: '[Chat] - RESEAT AFTER EXIT'}
    ) 
    const toogleDarkMode = () => dispatch(
        {type: '[Chat] - TOOGLE DARK MODE'}
    ) 

    return (
        <ChatContext.Provider value={{
            ...chatState,
            
            // Methods
            getUsers,
            selectChat,
            newMessage,
            loadMessages,
            reseatAfterExit,
            toogleDarkMode
        }}>
            { children }
        </ChatContext.Provider>
    )
}