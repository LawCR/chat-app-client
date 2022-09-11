import React from 'react'

export const SendMessage = () => {
  return (
    <form>
        <div className="flex items-center px-2 gap-x-2 ">
            <div className="w-full flex-1 flex items-center text-sm font-thin">
                <input type="text" className="w-full bg-gray-200 py-2 px-3 shadow rounded" placeholder="Escribe un mensaje aquí" />
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
