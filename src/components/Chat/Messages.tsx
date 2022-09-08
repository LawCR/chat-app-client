import React from 'react'
import { IncommingMessage } from './IncommingMessage';
import { SendMessage } from './SendMessage';
import { OutgoingMessage } from './OutgoingMessage';

export const Messages = () => {

    const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="mesgs">
            {/* <!-- Historial Chat --> */}
            <div className="msg_history">
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
