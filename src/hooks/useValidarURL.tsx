import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../types";
import { obtenerUserByName } from "../api/user";

export function useValidarURL(setUser: React.Dispatch<React.SetStateAction<User | null>>){
    const navigate = useNavigate()
    const { name_profesional } = useParams()
    const name = name_profesional?.toLocaleLowerCase();
    
    useEffect(() => {
        obtenerUser();
    },[])

    const obtenerUser = async () => {
        if(!name) return navigate("/404"); 
        const respuesta = await obtenerUserByName(name)
        if(respuesta[0] && respuesta[0].estado && respuesta[0].servicios[0].id_servicio === 3)
            return setUser(respuesta[0])
        return navigate("/404")
    }
}