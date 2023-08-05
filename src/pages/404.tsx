import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="bg-slate-200 border border-black gap-12 p-[100px] flex flex-col items-center rounded-lg">
                <h1 className="text-[32px]">Error: 404</h1>
                <span>
                    <Link to="/" className="p-3 hover:opacity-90 bg-blue-500 rounded-md border border-black">
                        Ir al inicio
                    </Link>
                </span>
            </div>
        </main>
    )
}