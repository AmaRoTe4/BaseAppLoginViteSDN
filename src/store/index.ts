//implementaciones a futuro

//import { create } from "zustand";
//import { Producto } from "../types";
//import { persist } from "zustand/middleware";

//interface State {
//  productos: Producto[];
//  addProducto: (newProducto: Producto) => void;
//  removeProducto: (id: string) => void;
//}

//export const useStoreProductos = create<State>()(
//  persist(
//    (set, get) => {
//      return {
//        productos: [],
//        addProducto: (newProducto: Producto) =>
//          set((state) => ({ productos: [...state.productos, newProducto] })),
//        removeProducto: (id: string) =>
//          set((state) => ({
//            productos: [...state.productos].filter((n) => n.id !== id),
//          })),
//      };
//    },
//    {
//      name: "xx-productos-xx",
//    }
//  )
//);