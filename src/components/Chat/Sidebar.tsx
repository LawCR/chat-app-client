import { SidebarChatItem } from "./SidebarChatItem"


export const Sidebar = () => {

    const chats = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="overflow-y-auto h-screen">

            {
                chats.map(chat => (
                    <SidebarChatItem key={chat} />
                ))
            }

            {/* <!-- Espacio extra para scroll --> */}
            <div className="h-24"></div>
        </div>
    )
}
