
import { ChatSelect } from '../../components/Chat/ChatSelect'
import { InboxPeople } from '../../components/Chat/InboxPeople'
import { Messages } from '../../components/Chat/Messages'
import '../../css/chat.css'

export const ChatPage = () => {
  return (
    <div className="messaging">
        <div className="inbox_msg">
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
