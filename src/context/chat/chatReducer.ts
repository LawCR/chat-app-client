import { Message } from '../../interfaces/Message';
import { User } from '../../interfaces/user';
import { ChatState } from './';

export type ChatActionType = 
| {type: '[Chat] - GET USERS', payload: User[] }
| {type: '[Chat] - SELECT USER', payload: User }
| {type: '[Chat] - NEW MESSAGE', payload: Message }
| {type: '[Chat] - LOAD MESSAGES', payload: Message[] }
| {type: '[Chat] - RESEAT AFTER EXIT' }
| {type: '[Chat] - TOOGLE DARK MODE' }

export const chatReducer = (state: ChatState, action: ChatActionType): ChatState => {
    switch (action.type) {
        case '[Chat] - GET USERS':
            return {
                ...state,
                users: [...action.payload]
            }
        case '[Chat] - SELECT USER':
            if ( state.activeChat === action.payload ) return state
            return {
                ...state,
                activeChat: action.payload,
                messages: []
            }
        case '[Chat] - NEW MESSAGE':
            if ( state.activeChat?.uid === action.payload.from || state.activeChat?.uid === action.payload.to) {
                return {
                    ...state,
                    messages: [action.payload, ...state.messages]
                }
            } else {
                return state
            }
        case '[Chat] - LOAD MESSAGES':
            return {
                ...state,
                messages: [...action.payload]
            }    
        case '[Chat] - RESEAT AFTER EXIT':
            return {
                uid: '',
                activeChat: null,
                users: [],
                messages: [],
                dark: false
            }
        case '[Chat] - TOOGLE DARK MODE':
            return {
                ...state,
                dark: !state.dark
            }

        default:
            return state;
    }
}