import { useEffect } from "react";
import { getVarForLocalStorage } from "../localhost";

export const CargarData = () => {
    useEffect(() => {
        cargarTema()
    }, [])

    const cargarTema = () => {
        const html = document.querySelector("html") as HTMLElement
        const data = getVarForLocalStorage("__tema__");
        
        if(data === "Oscuro" && !html.classList.contains("Oscuro")) return html.classList.add("dark")
        if(data === "Claro") html.classList.remove("dark")
    }
};