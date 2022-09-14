import { useContext } from "react"
import { AuthContext } from "../../auth"
import { ChatContext } from "../../context/chat"

export const SearchBox = () => {

  const { auth, logout } = useContext(AuthContext)
  const { reseatAfterExit } = useContext(ChatContext)
  const { toogleDarkMode } = useContext(ChatContext)

  const onLogout = () => {
    logout()
    reseatAfterExit()
  }


  return (
    <div className="overflow-hidden border-b dark:border-gray-800 py-3 px-2 flex justify-between items-center">
        <div className="text-indigo-500 cursor-pointer" onClick={toogleDarkMode}>
            <h4>{ auth.name } {auth.lastname} </h4>
        </div>
        <div className="">
            <button 
              className="text-red-500"
              onClick={onLogout}
            >
                Salir
            </button>
        </div>
    </div>
  )
}
