import { user_default } from '../../assets'
import { User } from '../../interfaces/user'
import { useContext } from 'react';
import { ChatContext } from '../../context/chat';
import { fetchPrivate } from '../../helpers/fetch';
import { scrollToBottom } from '../../helpers/scrollToBottom';

interface Props {
    user: User
}

export const SidebarChatItem = ({user}: Props) => {

    const { activeChat, selectChat, loadMessages, messages } = useContext(ChatContext)

    // console.log(messages)

    const onSelectChat = async() => {
        selectChat(user)

        //* Cargar los mensajes del chat activo /messages/631e84cd5557d7480fc3ab31
        const resp = await fetchPrivate(`messages/${user.uid}`)
        loadMessages(resp.last30)

        //* Mover el scroll
        scrollToBottom('messages')
    }



    return (
        <div 
            className={`${user.uid === activeChat?.uid && 'bg-gray-200 dark:bg-gray-800'} 
                border cursor-pointer m-0 py-4 px-3 border-gray-300 hover:bg-gray-100 transition
                dark:border-gray-700 dark:hover:bg-gray-800
            `}
            onClick={onSelectChat}
        >
            
            <div className="overflow-hidden clear-both flex items-center gap-x-3">
                <div className="w-12"> 
                    <img 
                      className='rounded-full shadow' 
                      src={user_default} 
                      alt="sunil" 
                    />
                </div>
                <div className="flex flex-col gap-y-1 flex-1 mb-1">
                    <h5 className='font-light dark:text-white'>{user.name} {user.lastname}</h5>
                    {
                      (user.online)
                      ? <span className="text-green-600">Online</span>
                      : <span className="text-red-600">Offline</span>
                    }
                </div>
            </div>
        </div>
    )
}
