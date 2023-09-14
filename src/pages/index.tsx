import { Link } from "react-router-dom"
import { Rutas_main } from "../const/rutas"

export default function Index() {
    return (
        <div className="w-screen h-screen flex flex-col dark:bg-black">
            <nav className="w-full pt-3 pb-2 flex justify-center">
                <h1 className="text-[35px] font-bold dark:text-gray-100">Contador de ventas</h1>
            </nav>
            <main className="w-full flex flex-col items-center pt-16">
                <ul className="w-[60%] flex flex-col gap-5">
                    {Rutas_main && Rutas_main.map((n) =>
                        <Link
                            key={n.id}
                            to={n.url}
                        >
                            <li
                                className="w-full bg-gray-500 rounded-lg border border-white hover:cursor-pointer hover:bg-lime-300 text-[20px] text-center md:text-left p-3 text-white dark:bg-gray-600 dark:text-gray-100"
                            >
                                {n.titulo}
                            </li>
                        </Link>
                    )}
                </ul>
            </main>
        </div>
    )
}