//import { updateEstadoProducto } from "../localhost/productos";
import Update_black from "../svg/update_black";
import Xmark_black from "../svg/xmark_black";
import { Producto } from "../types";

interface props {
    allProductos:Producto[]
    setProductoUpdate: (prod: Producto | undefined) => void
    updateEstadoProductoHook: (id: string , estado: boolean) => void
    deleteProductoForId: (id:string ) => void
}

export default function TablaProductos({allProductos , setProductoUpdate , updateEstadoProductoHook , deleteProductoForId}:props) {
    return (
        <>
            <div className="relative overflow-x-auto w-full min-h-[330px] max-h-[330px] sin_scroll_bar">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3 text-end">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3 text-end">
                                Costo
                            </th>
                            <th scope="col" className="px-6 py-3 text-end">
                                Vendidos
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Habilitado
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Actualizar
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Eliminar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProductos.length > 0 && allProductos.map((n) =>
                            <tr key={n.id}>
                                <th scope="col" className="px-6 py-2">
                                    {n.nombre}
                                </th>
                                <th scope="col" className="px-6 py-2 text-end">
                                    ${n.precio}
                                </th>
                                <th scope="col" className="px-6 py-2 text-end">
                                    ${n.costo}
                                </th>
                                <th scope="col" className="px-6 py-2 text-end">
                                    {n.vendidos}
                                </th>
                                <th scope="col" className="px-6 py-2 text-center">
                                    <button
                                        className={`
                                                ${n.estado ? "bg-green-600" : "bg-red-600"}
                                                px-2 py-1 text-black rounded-md
                                                `}
                                        type="button"
                                        onClick={async () => await updateEstadoProductoHook(n.id, !n.estado)}
                                    >
                                        {n.estado.toString()}
                                    </button>
                                </th>
                                <th scope="col" className="px-6 py-2 text-center">
                                    <button
                                        className={`px-2 py-1 text-black rounded-md`}
                                        type="button"
                                        onClick={() => setProductoUpdate(n)}
                                    >
                                        <Update_black className="h-[25px]" />
                                    </button>
                                </th>
                                <th scope="col" className="px-6 py-2 text-center">
                                    <button
                                        className={`px-2 py-1 text-black rounded-md`}
                                        type="button"
                                        onClick={async () => await deleteProductoForId(n.id)}
                                    >
                                        <Xmark_black className="h-[25px]" />
                                    </button>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {allProductos.length <= 0 &&
                <h3 className="text-[35px] opacity-20 font-bold">Productos...</h3>
            }
        </>
    )
}