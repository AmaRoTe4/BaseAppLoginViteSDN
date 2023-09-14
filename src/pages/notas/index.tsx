import { cartelError, cartelOk } from "../../functions/carteles";
import useGetAllNotas from "../../hooks/useGetAllNotas"
import { Layout } from "../../layout/Layout";
import { addNota } from "../../localhost/notas";
import Xmark_black from "../../svg/xmark_black";
import { Nota } from "../../types";

export default function Notas() {
    const [
        notas,
        setNotas,
        handlerCreateNota,
        upgradeNota,
        removeNota,
        handlerText
    ] = useGetAllNotas()

    return (
        <Layout>
            <nav className="w-full pt-3 pb-2 flex justify-center">
                <h1 className="text-[35px] font-bold dark:text-gray-100">Notas</h1>
            </nav>
            <main className="border-y border-black min-h-[330px] max-h-[330px] overflow-y-scroll w-full flex flex-col items-center">
                <ul className="px-7 py-7 w-full flex justify-center flex-wrap gap-5">
                    {notas.length > 0 && notas.map((n) =>
                        <li key={n.id} className="p-2 border border-black flex flex-col gap-2 w-[90%] md:w-[300px] bg-yellow-500">
                            <div className="w-full flex justify-end">
                                <button type="button" onClick={() => { removeNota(n.id); }}>
                                    <Xmark_black className="h-[25px]" />
                                </button>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <textarea
                                    value={n.text}
                                    className="px-1 font-wrap w-full text-[16px] bg-yellow-500 min-h-[100px] max-h-[100px] flex items-start justify-center"
                                    onChange={(e) => handlerText(e.target.value, n.id)}
                                />
                            </div>
                        </li>
                    )}
                    {notas.length <= 0 &&
                        <h3 className="text-[35px] opacity-20 font-bold dark:text-gray-100 ">Notas...</h3>
                    }
                </ul>
            </main>
            <span className={`w-full justify-center items-center pt-2`}>
                <button type="button" onClick={() => upgradeNota()} className="p-2 bg-green-500 border border-black rounded-sm text-[14px] w-[50%] md:w-[200px]">
                    Editar
                </button>
            </span>
            <section className="w-full flex flex-col justify-center items-center pt-8">
                <form className="w-full px-7 flex flex-col justify-center items-center gap-5" onSubmit={e => handlerCreateNota(e)}>
                    <textarea
                        name="text-of-nota"
                        id="text-of-nota"
                        placeholder="texto de la nota"
                        className="w-full md:w-[400px] text-[16px] p-2 rounded-md border border-black dark:text-gray-100 dark:bg-gray-900"
                    />
                    <button className="w-full md:w-[400px] text-[16px] bg-green-500 p-2 rounded-md border border-black">
                        Crear
                    </button>
                </form>
            </section>
        </Layout>
    )
}