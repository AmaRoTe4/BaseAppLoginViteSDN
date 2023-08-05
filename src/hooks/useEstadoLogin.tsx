import { useEffect } from "react"
import { validarLogin } from "../validaciones/login"
import { useParams } from "react-router-dom"

export const useEstadoLogin = (setEstado: React.Dispatch<React.SetStateAction<boolean>>) => {
    const { name_profesional } = useParams()

    useEffect(() => {
        comprobarEstado()
    }, [])

    const comprobarEstado = async () => {
        const name = name_profesional?.split("_").join(" ").toLocaleLowerCase();
        const user_string: string | null = localStorage.getItem("user")
        if (!user_string) return setEstado(false)
        const user = JSON.parse(user_string)
        const estado = user.estado

        const { resultado } = await validarLogin(user?.id)
        if (estado && resultado && name === user?.nombre) return setEstado(estado)
    }
}