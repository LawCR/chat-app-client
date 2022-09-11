
export const SearchBox = () => {
  return (
    <div className="overflow-hidden border-b py-3 px-2 flex justify-between items-center">
        <div className="text-indigo-500 cursor-pointer">
            <h4>Recientes</h4>
        </div>
        <div className="">
            <button className="text-red-500">
                Salir
            </button>
        </div>
    </div>
  )
}
