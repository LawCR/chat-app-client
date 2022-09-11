import React from 'react'

export const SidebarChatItem = () => {
  return (
    <div className="border border-gray-300 cursor-pointer m-0 py-4 px-3 hover:bg-gray-200 transition">
        {/* active_chat */}
        <div className="overflow-hidden clear-both flex items-center gap-x-3">
            <div className="w-14"> 
                <img className='' src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="flex flex-col gap-y-1 flex-1 mb-1">
                <h5 className='font-light'>Some random name</h5>
                <span className="text-green-600">Online</span>
                {/* <span className="text-red-600">Offline</span> */}
            </div>
        </div>
    </div>
  )
}
