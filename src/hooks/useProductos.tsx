import { useEffect, useState } from "react";
import { Nota, Producto } from "../types";
import { addNota, getAllNotas, deleteNota, updateNota, updateAllNota } from "../localhost/notas";
import { cartelError, cartelOk } from "../functions/carteles";
import { inicialStateProducto } from "../const/productos";
import { addProducto, addUnoCantidadProducto, deleteAllProductos, deleteProducto, getAllProductos, removeUnoCantidadProducto, updateCantidadA0Producto, updateEstadoProducto, updateProductoElement } from "../localhost/productos";

export default function useProductos(): {
    totalVendido: number,
    totalCosto: number,
    prodAction: Producto,
    allProductosActivos: Producto[],
    allProductos: Producto[],
    renderForm: boolean,
    selectedToForm: (prod?: Producto | undefined, state?: boolean) => void,
    HandlerProdutos: (e: React.ChangeEvent<HTMLInputElement>) => void,
    ActionProducto: (e: React.FormEvent<HTMLFormElement>) => void,
    updateEstadoProductoHook: (id: string, estado: boolean) => void,
    deleteProductoForId: (id: string) => void,
    resetAllProducto: () => void,
    deleteAllProductosHook: () => void
    removeUnoCantidadProductoHook: (id: string) => void
    addUnoCantidadProductoHook: (id: string) => void
} {
    const [prodAction, setProdAction] = useState<Producto>(inicialStateProducto)
    const [allProductos, setAllProductos] = useState<Producto[]>([])
    const [allProductosActivos, setAllProductosActivos] = useState<Producto[]>([])
    const [renderForm, setRenderForm] = useState<boolean>(false)
    const [totalVendido, setTotalVendido] = useState<number>(0)
    const [totalCosto, setTotalCosto] = useState<number>(0)

    useEffect(() => {
        cargarProductos()
    }, [])

    useEffect(() => {
        totales()
    }, [allProductos])

    const updateEstadoProductoHook = async (id: string, estado: boolean) => {
        setAllProductos([...allProductos].map(n => {
            if (n.id === id) n.estado = estado;
            return n
        }))
        await updateEstadoProducto(id, estado)
    }

    const deleteProductoForId = async (id: string) => {
        setAllProductos([...allProductos].filter(n => n.id !== id))
        await deleteProducto(id)
        cartelOk("Eliminado con exito!")
    }

    const selectedToForm = (prod: Producto | undefined = undefined, state: boolean = true) => {
        if (prod) setProdAction(prod)
        else setProdAction(inicialStateProducto)
        setRenderForm(state);
    }

    const totales = () => {
        let costo = 0;
        let vendido = 0;

        allProductos.forEach((n) => {
            costo += n.costo * n.vendidos
            vendido += n.precio * n.vendidos
        })

        setTotalCosto(costo)
        setTotalVendido(vendido)
    }

    const cargarProductos = async () => {
        const data = await getAllProductos()
        if (data == null) return cartelError("Error al cargar la info")
        setAllProductos(data)
        setAllProductosActivos(data.filter((n: Producto) => n.estado))
    }

    const HandlerProdutos = (e: React.ChangeEvent<HTMLInputElement>) => {
        const propiedad = e.target?.id
        const value = propiedad !== "nombre" ? Number(e.target?.value) : e.target.value
        return setProdAction({ ...prodAction, [propiedad]: value });
    }

    const ActionProducto = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (prodAction.id !== "") {
            await updateProductoElement(prodAction.id, prodAction)
            setAllProductos([...allProductos].map(n => {
                return n.id === prodAction.id ? prodAction : n
            }))
            cartelOk("Actualizado con exito!")
        } else {
            await addProducto(prodAction)
            setAllProductos([...allProductos, prodAction])
            cartelOk("Creado con exito!")
        }
        setProdAction(inicialStateProducto)
        setRenderForm(false)
    }

    const resetAllProducto = async () => {
        await updateCantidadA0Producto()
        cartelOk("Productos reinicializados con exito!")
        setAllProductos(allProductos.map(n => {
            n.vendidos = 0;
            return n;
        }));
    }

    const deleteAllProductosHook = async () => {
        await deleteAllProductos()
        cartelOk("Productos eliminados con exito!")
        setAllProductos([]);
    }

    const addUnoCantidadProductoHook = async (id: string) => {
        await addUnoCantidadProducto(id)
        setAllProductos([...allProductos].map(n => {
            if (n.id === id) n.vendidos += 1
            return n
        }))
    };

    const removeUnoCantidadProductoHook = async (id: string) => {
        await removeUnoCantidadProducto(id)
        setAllProductos([...allProductos].map(n => {
            if (n.id === id && n.vendidos > 0) n.vendidos -= 1
            return n
        }))
    };


    return {
        totalVendido,
        totalCosto,
        allProductosActivos,
        prodAction,
        allProductos,
        renderForm,
        selectedToForm,
        HandlerProdutos,
        ActionProducto,
        updateEstadoProductoHook,
        deleteProductoForId,
        resetAllProducto,
        deleteAllProductosHook,
        removeUnoCantidadProductoHook,
        addUnoCantidadProductoHook
    }
}