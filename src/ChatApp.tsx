
import { AuthProvider } from './auth'
import { SocketProvider } from './context'
import { AppRouter } from './router/AppRouter'
import { ChatProvider } from './context/chat/ChatProvider';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es'); 

export const ChatApp = () => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  )
}
