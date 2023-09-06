import { useState } from "react"

export default function Resumenes() {
    const [cambio, setCambio] = useState<number>(0)
    const [otrosGastos, setOtrosGastos] = useState<number>(0)

    const [totalVentas, setTotalVentas] = useState<number>(1000)
    const [costoTotales, setCostoTotales] = useState<number>(0)

    return (
        <div className="w-screen h-screen flex flex-col overflow-x-hidden pb-10">
            <nav className="w-full pt-3 pb-2 flex justify-center">
                <h1 className="text-[35px] font-bold">Resumen</h1>
            </nav>
            <section className="px-5 pt-2 py-4">
                <h2 className="text-[25px] font-bold py-2">Caja:</h2>
                <div className="w-full flex gap-2">
                    <h4 className="w-[200px]">Valor total vendido:</h4>
                    <p className="w-[10px]">$</p>
                    <h4 className="w-[100px]">{totalVentas}</h4>
                </div>
                <div className="w-full flex gap-2">
                    <h4 className="w-[200px]">Cambio:</h4>
                    <p className="w-[10px]">$</p>
                    <input
                        className="w-[100px]"
                        placeholder="cambio"
                        type="number"
                        value={cambio}
                        onChange={e => setCambio(Number(e.target.value))}
                    />
                </div>
                <div className="w-full flex gap-2 pt-1 border-t border-black">
                    <h4 className="w-[200px]">Valor total neto:</h4>
                    <p className="w-[10px]">$</p>
                    <h4 className="w-[100px]">{totalVentas + cambio}</h4>
                </div>
            </section>
            <section className="px-5 pt-2 py-4">
                <h2 className="text-[25px] font-bold py-2">Resultados:</h2>
                <div className="w-full flex gap-2">
                    <h4 className="w-[200px]">Valor total vendido:</h4>
                    <p className="w-[10px]">$</p>
                    <h4 className="w-[100px]">{totalVentas}</h4>
                </div>
                <div className="w-full flex gap-2">
                    <h4 className="w-[200px]">Valor total de costo:</h4>
                    <p className="w-[10px]">$</p>
                    <h4 className="w-[100px]">{costoTotales}</h4>
                </div>
                <div className="w-full flex gap-2">
                    <h4 className="w-[200px]">Otros gastos:</h4>
                    <p className="w-[10px]">$</p>
                    <input
                        className="w-[100px]"
                        placeholder="otros gestos"
                        type="number"
                        value={otrosGastos}
                        onChange={e => setOtrosGastos(Number(e.target.value))}
                    />
                </div>
                <div className="w-full flex gap-2 pt-1 border-t border-black">
                    <h4 className="w-[200px]">Ganancia estimada:</h4>
                    <p className="w-[10px]">$</p>
                    <h4 className="w-[100px]">{totalVentas - costoTotales - otrosGastos}</h4>
                </div>
            </section>
        </div>
    )
}
//<div>
//    <div>
//        total de valor de las ventas
//        <input type="text"
//        //cambio
//        />
//        total
//    </div>
//    <div>
//        todos los productos
//        total vendidos, subtotal en precio por vendido
//    </div>
//</div>