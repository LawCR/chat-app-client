import { getHourMonth } from "../../helpers/dates"
import { Message } from "../../interfaces/Message"

interface Props {
  message: Message
}

export const OutgoingMessage = ({message}: Props) => {
  return (
    // <div className="overflow-hidden my-2">
    <div className=" my-1">
        <div className="float-right w-[46%]">
            <p className='bg-indigo-500 text-white rounded text-sm w-full py-[5px] px-[10px]'>
              {message.message}
            </p>
            <span className="text-gray-500 text-xs"> 
              {getHourMonth(message.createdAt!)}
            </span>
        </div>
    </div>
  )
}
