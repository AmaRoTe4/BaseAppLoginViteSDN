import { useNavigate, useParams } from "react-router-dom";
import { User } from "../types";

export default function useValidarURLByUser(user: User | null){
    const navigate = useNavigate()
    const { name_profesional } = useParams()
    const name = name_profesional?.split("_").join(" ").toLocaleLowerCase();
    
    if(!user) return navigate("/404") 
    if(name === user.cliente.nombre) return
    
    navigate("/404")
}