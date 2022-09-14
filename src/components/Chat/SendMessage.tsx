import { useState, useContext } from 'react';
import { AuthContext } from '../../auth';
import { SocketContext } from '../../context';
import { ChatContext } from '../../context/chat/ChatContext';

export const SendMessage = () => {

    const { socket } = useContext(SocketContext)
    const { auth } = useContext(AuthContext)
    const { activeChat } = useContext(ChatContext)
    const [message, setMessage] = useState('')

    const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.length === 0) return
        setMessage('');

        // Emitir evento de sockets para enviar el mensaje
        if (auth?.uid && activeChat) {
            socket?.emit('personal_message', {
                from: auth.uid,
                to: activeChat?.uid,
                message
            })
        }
        // TODO: Hacer el dispatch de el mensaje
    }


    return (
        <form onSubmit={onSubmit} className='p-2' >
            <div className="flex items-center px-2 gap-x-2 dark:bg-gray-900">
                <div className="w-full flex-1 flex items-center text-sm font-thin">
                    <input 
                        type="text" 
                        className="w-full bg-gray-200  py-2 px-3 shadow rounded" 
                        placeholder="Escribe un mensaje aquí" 
                        value={message}
                        onChange={onChangeMessage}
                    />
                </div>
                <div className="flex items-center">
                    <button className="bg-indigo-500 text-white py-1 px-2 rounded" type="submit">
                        Enviar
                    </button>
                </div>
            </div>
        </form>
    )
}
