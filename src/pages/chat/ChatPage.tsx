
import { ChatSelect } from '../../components/Chat/ChatSelect'
import { InboxPeople } from '../../components/Chat/InboxPeople'
import { Messages } from '../../components/Chat/Messages'
import { useContext } from 'react';
import { ChatContext } from '../../context/chat';
import '../../css/chat.css'

export const ChatPage = () => {

    const { activeChat } = useContext(ChatContext)

    return (
        <div className="messaging">
            <div className="h-screen overflow-hidden clear-both border dark:bg-gray-900 dark:border-gray-700">
                <InboxPeople />
                {
                    (activeChat)
                        ? <Messages />
                        : <ChatSelect />
                }
            </div>
        </div>
    )
}
