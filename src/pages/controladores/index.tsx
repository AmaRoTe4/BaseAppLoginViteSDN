import useProductos from "../../hooks/useProductos"
import { Layout } from "../../layout/Layout";
import Minus_black from "../../svg/minus_black";

export default function Controladores() {
    const {
        allProductosActivos,
        removeUnoCantidadProductoHook,
        addUnoCantidadProductoHook
    } = useProductos();

    return (
        <Layout>
            <nav className="w-full pt-3 pb-5 flex justify-center items-center">
                <h1 className="text-[35px] font-bold dark:text-gray-100">Controles</h1>
            </nav>
            {allProductosActivos.length > 0 &&
                <main className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ls:grid-cols-4 xl:grid-cols-4 grid-auto-rows gap-6 h-auto overflow-x-hidden overflow-y-scroll sin_scroll_bar border border-black">
                    {allProductosActivos.map((producto) => (
                        <span key={producto.id} className="bg-white rounded-lg pt-4 border border-black h-auto dark:bg-gray-800 dark:border-gray-100">
                            <div className="h-[230px] border-b border-black dark:border-gray-100">
                                <button
                                    className="h-full w-full cursor-pointer flex justify-center items-center p-2 
                                    dark:text-gray-100"
                                    onClick={async () => await addUnoCantidadProductoHook(producto.id)}
                                >
                                    <h2 className="font-bold text-[30px] md:text-[30px] text-wrap">
                                        {producto.nombre}
                                    </h2>
                                </button>
                            </div>
                            <div className="flex justify-between px-2 py-1 bg-gray-500 rounded-bl-lg rounded-br-lg dark:bg-gray-600">
                                <div className="w-[50%]">
                                    <button
                                        className="bg-red-500 border border-black text-white py-2 px-4 rounded-md hover:bg-red-600
                                        dark:border-none"
                                        onClick={async () => await removeUnoCantidadProductoHook(producto.id)}
                                    >
                                        <Minus_black className="h-[25px] dark:fill-gray-100" />
                                    </button>
                                </div>
                                <div className="w-[50%] flex justify-end">
                                    <h2 className="text-[30px] dark:text-gray-100">{producto.vendidos}</h2>
                                </div>
                            </div>
                        </span>
                    ))}
                </main>}
            {allProductosActivos.length === 0 &&
                <main className="border border-black p-20 w-full flex justify-center items-center">
                    <h2 className="text-center text-2xl font-semibold dark:text-gray-100">No hay productos disponibles</h2>
                </main>
            }
        </Layout>
    )
}