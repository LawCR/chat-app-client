import { BrowserRouter , Routes, Route } from "react-router-dom"
import { ChatPage } from '../pages/chat/ChatPage';
import { AuthRouter } from "./AuthRouter";



export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/" element={<ChatPage />} />

            <Route path='/*' element={<ChatPage />} />
        </Routes>
    </BrowserRouter>
)
}
