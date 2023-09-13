import { useEffect, useState } from "react";
import { Nota } from "../types";
import { addNota, getAllNotas , deleteNota , updateNota, updateAllNota } from "../localhost/notas";
import { cartelError, cartelOk } from "../functions/carteles";

export default function useGetAllNotas(): [
    Nota[], 
    React.Dispatch<React.SetStateAction<Nota[]>>, 
    (e:React.FormEvent<HTMLFormElement>) => void,
    () => void,
    (id:string) => void,
    (text:string , id:string) => void
] {
    const [notas, setNotas] = useState<Nota[]>([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const resultado = await getAllNotas();
        if (resultado) setNotas(resultado)
    }

    const upgradeNota = async () => {
        const newNotas = await updateAllNota(notas);
        if(newNotas == null) return cartelError("Problemas al actualizar la nota!")
        cartelOk("Nota actualizada!")
    }

    const removeNota = async (id:string) => {
        const newNotas = await deleteNota(id);
        if(newNotas == null) return cartelError("Problemas al eliminar la nota!")
        setNotas(newNotas)
        cartelOk("Nota eliminada!")
    }

    const handlerText = (text:string , id:string) => {
        const newNotas = notas.map((n) => {
            if(n.id === id){
                n.text = text
            }
            return n
        })
        setNotas(newNotas)
    }

    const handlerCreateNota = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const text = formData.get("text-of-nota") as string

        if (text == null || text === "") return cartelError("Tiene que agregar texto para crear una nota")

        const resultado = await addNota({
            id: "0",
            text
        })

        if (!resultado) return cartelError("Error al crear");
        if (resultado) cartelOk("Creado con exito");

        form.reset();
        setNotas([...notas, resultado])
    }

    return [notas, setNotas, handlerCreateNota , upgradeNota , removeNota , handlerText]
}