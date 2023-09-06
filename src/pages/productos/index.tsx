import { useState } from "react"
import { Producto } from "../../types"
import Xmark_black from "../../svg/xmark_black";
import Update_black from "../../svg/update_black";

export default function Productos() {
    const [prodAction, setProdAction] = useState<Producto | null>(null)
    const [newProd, setNewProd] = useState<Producto>(
        {
            id: "",
            nombre: "",
            precio: 0,
            costo: 0,
            vendidos: 0,
            estado: true,
        }
    )
    const [allProductos, setAllProductos] = useState<Producto[]>([
        {
            id: "string",
            nombre: "string",
            precio: 100,
            costo: 100,
            vendidos: 0,
            estado: true,
        }
    ])

    const HandlerProd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const propiedad = e.target?.id
        const value = propiedad !== "nombre" ? Number(e.target?.value) : e.target.value

        if (!propiedad || !value) return;
        if (prodAction)
            return setProdAction({ ...prodAction, [propiedad]: value });
        setNewProd({ ...newProd, [propiedad]: value })
    }

    return (
        <div className="px-5">
            <nav className="w-full pt-3 pb-5 flex justify-center">
                <h1 className="text-[35px] font-bold">Productos</h1>
            </nav>
            <main className="border-y border-black overflow-y-scroll w-full flex flex-col items-center">
                <div className="relative overflow-x-auto w-full min-h-[330px] max-h-[330px]">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Precio
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Costo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Vendidos
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Habilitado
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actualizar
                                </th>
                                <th scope="col" className="px-6 py-3">
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
                                    <th scope="col" className="px-6 py-2">
                                        {n.precio}
                                    </th>
                                    <th scope="col" className="px-6 py-2">
                                        {n.costo}
                                    </th>
                                    <th scope="col" className="px-6 py-2">
                                        {n.vendidos}
                                    </th>
                                    <th scope="col" className="px-6 py-2">
                                        <button
                                            className={`
                                                ${n.estado ? "bg-green-600" : "bg-red-600"}
                                                px-2 py-1 text-black rounded-md
                                                `}
                                            type="button"
                                        >
                                            {n.estado.toString()}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-6 py-2">
                                        <button
                                            className={`px-2 py-1 text-black rounded-md`}
                                            type="button"
                                            onClick={() => setProdAction(n)}
                                        >
                                            <Update_black className="h-[25px]" />
                                        </button>
                                    </th>
                                    <th scope="col" className="px-6 py-2">
                                        <button
                                            className={`px-2 py-1 text-black rounded-md`}
                                            type="button"
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
            </main>
            <section className="w-full flex flex-col justify-center items-center">
                <nav className="w-full pt-3 pb-2 flex justify-center">
                    <h2 className="text-[16px] font-bold">Formulario para {prodAction ? "editar" : "crear"}</h2>
                </nav>
                <form className="w-full md:w-[300px] flex flex-col gap-3 py-3">
                    <input
                        className="border border-black px-2 py-1 rounded-sm"
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="nombre"
                        value={prodAction ? prodAction.nombre : newProd.nombre}
                        onChange={e => HandlerProd(e)}
                    />
                    <input
                        className="border border-black px-2 py-1 rounded-sm"
                        type="number"
                        name="precio"
                        id="precio"
                        placeholder="precio"
                        value={prodAction ? prodAction.precio : newProd.precio}
                        onChange={e => HandlerProd(e)}
                    />
                    <input
                        className="border border-black px-2 py-1 rounded-sm"
                        type="number"
                        name="costo"
                        id="costo"
                        placeholder="costo"
                        value={prodAction ? prodAction.costo : newProd.costo}
                        onChange={e => HandlerProd(e)}
                    />
                    <input
                        className="border border-black px-2 py-1 rounded-sm"
                        type="number"
                        name="vendidos"
                        id="vendidos"
                        placeholder="vendidos"
                        value={prodAction ? prodAction.vendidos : newProd.vendidos}
                        onChange={e => HandlerProd(e)}
                    />
                    <button type="button" className="border border-black px-2 py-1 rounded-sm bg-green-500">
                        {prodAction ? "Editar" : "Crear"}
                    </button>
                </form>
            </section>
            <footer className="pt-2 py-10">
                <span className="w-full md:w-[250px] flex flex-col gap-3 py-3">
                    <button type="button" className="border border-black px-2 py-1 rounded-sm bg-yellow-500">
                        Borrar todas las ventas <span className="font-bold">(reset)</span>
                    </button>
                    <button type="button" className="border border-black px-2 py-1 rounded-sm bg-yellow-500">
                        Borrar todo
                    </button>
                </span>
            </footer>
        </div>
    )
}