import { SidebarChatItem } from "./SidebarChatItem"
import { useContext } from 'react';
import { ChatContext } from "../../context/chat";
import { AuthContext } from "../../auth";


export const Sidebar = () => {

    const { users } = useContext(ChatContext)
    const { auth } = useContext(AuthContext)
    
    return (
        <div className="overflow-y-auto h-screen">
            {
                users
                    .filter(user => user.uid !== auth.uid)
                    .map(user => (
                    <SidebarChatItem 
                        key={user.uid} 
                        user={user}
                    />
                ))
            }

            {/* <!-- Espacio extra para scroll --> */}
            <div className="h-24"></div>
        </div>
    )
}
