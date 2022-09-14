import { useContext } from 'react'
import { IncommingMessage } from './IncommingMessage';
import { SendMessage } from './SendMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { ChatContext } from '../../context/chat';
import { AuthContext } from '../../auth';

export const Messages = () => {
    const { activeChat, messages } = useContext(ChatContext)
    const { auth } = useContext(AuthContext)

    // const id = document.getElementById('messages')

    return (
        <div className="float-left h-screen w-[65%]">
            <div className='bg-gray-100 dark:bg-gray-900 h-8 flex items-center justify-center'>
                <h3 className='px-2 py-1 font-medium dark:text-white'>{activeChat?.name} {activeChat?.lastname}</h3>
            </div>
            
            <div 
                id='messages' 
                className=" dark:bg-gray-900 h-calc flex flex-col "
            >
                <div className='flex flex-col-reverse flex-1 overflow-y-auto py-1 px-5'>
                    {
                        messages.map(message => (
                            (message.from === auth.uid)
                                ? <OutgoingMessage key={message._id} message={message} />
                                : <IncommingMessage key={message._id} message={message} />
                        ))
                    }
                </div>
                <SendMessage />
            </div>
        </div>
    )
}
