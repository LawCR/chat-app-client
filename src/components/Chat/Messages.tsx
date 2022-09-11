import React from 'react'
import { IncommingMessage } from './IncommingMessage';
import { SendMessage } from './SendMessage';
import { OutgoingMessage } from './OutgoingMessage';

export const Messages = () => {

    const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12];
    return (
        <div className="float-left h-screen w-[65%]">
            {/* TODO: Espacio para poner el dueño del chat  */}
            <div className='bg-gray-100'>
                <h3 className='px-2 py-1 font-medium'>Juanito Alimaña</h3>
            </div>
            {/* <!-- Historial Chat --> */}
            <div className="overflow-y-auto h-[90%] py-1 px-5">
                {
                    msgs.map(msg => (
                        (msg % 2)
                            ? <IncommingMessage key={msg} />
                            : <OutgoingMessage key={msg} />
                    ))
                }
            </div>

            {/* <!-- Envio de Messages --> */}
            <SendMessage />
        </div>
    )
}
