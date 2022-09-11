
import { ChatSelect } from '../../components/Chat/ChatSelect'
import { InboxPeople } from '../../components/Chat/InboxPeople'
import { Messages } from '../../components/Chat/Messages'
import '../../css/chat.css'

export const ChatPage = () => {
  return (
    <div className="messaging">
        <div className="h-screen overflow-hidden clear-both border">
            <InboxPeople />
            {
                true 
                    ? <Messages />
                    : <ChatSelect />
            }
        </div>
    </div>
  )
}
