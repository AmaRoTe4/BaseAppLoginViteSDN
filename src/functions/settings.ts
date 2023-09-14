import { setVarForLocalStorage } from "../localhost";
import { cartelOk } from "./carteles";

export const saveConf = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const tema = formData.get("__tema__") as string;

    setVarForLocalStorage("__tema__" , tema);
    
    cartelOk("Configuracion guardada con exito!");
    window.location.reload();
}