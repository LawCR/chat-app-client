import { getHourMonth } from '../../helpers/dates'
import { Message } from '../../interfaces/Message'

interface Props {
    message: Message
}

export const IncommingMessage = ({message}: Props) => {
    
    return (
        <div className="my-1">
            <div className="w-[4%] xl:w-[3%] inline-block">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="inline-block pl-3 w-[92%] align-top">
                <div className="w-3/5">
                    <p className='bg-gray-200 rounded text-gray-700 text-sm py-[5px] px-[10px] w-full'>
                        {message.message}
                    </p>
                    <span className="text-gray-500 text-xs"> 
                        {getHourMonth(message.createdAt!)}
                    </span>
                </div>
            </div>
        </div>
    )
}
