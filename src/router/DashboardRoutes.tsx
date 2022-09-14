import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChatPage } from '../pages'

export const DashboardRoutes = () => {
  return (
    <>
        {/* <Navbar /> */}

        <div className="">
            <Routes>
                <Route path="/" element={ <ChatPage /> } />

                <Route path='/*' element={<ChatPage />} />
            </Routes>
        </div>
    </>
  )
}
