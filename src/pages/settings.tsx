import { Layout } from "../layout/Layout";
import { Settings } from "../const/settings";
import { getVarForLocalStorage } from "../localhost";
import { saveConf } from "../functions/settings";

export default function Setting() {
    return (
        <Layout>
            <nav className="w-full pt-3 pb-2 flex justify-center">
                <h1 className="text-[24px] md:text-[35px] font-bold dark:text-gray-100">Configuraciones</h1>
            </nav>
            <form className="w-full flex flex-col gap-20" onSubmit={(e) => saveConf(e)}>
                <ul className="w-full flex flex-col items-center">
                    {Settings && Settings.map((n) =>
                        <li key={n.id} className="flex flex-col w-[90%] md:w-[50%] py-4">
                            <div className="p-2 border-b border-black">
                                <h4 className="text-[16px] font-semibold dark:text-gray-100">
                                    {n.name}
                                </h4>
                            </div>
                            <div className="w-full border dark:border-white dark:bg-gray-800">
                                <select name={n.varible} id={`id_${n.name}`} className="w-full px-3 py-2">
                                    {n.options && n.options.map((m, y) =>
                                        <option
                                            className="dark:text-black dark:bg-gray-100"
                                            key={y}
                                            value={m}
                                            selected={m === getVarForLocalStorage(n.varible)}
                                        >
                                            {m}
                                        </option>
                                    )}
                                </select>
                            </div>
                        </li>
                    )}
                </ul>
                <div className="w-full pt-3 pb-2 flex justify-center">
                    <button type="submit" className="text-[20px] font-semibold bg-green-500 px-3 py-2 rounded-lg dark:text-gray-100 dark:border-white border">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </Layout>
    )
}