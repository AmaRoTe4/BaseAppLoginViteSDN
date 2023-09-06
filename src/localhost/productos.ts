import { Producto } from "../types";
import { getIdProductos, initialIdProductos } from "./ids";

const name_repo = "xx-general-productos-xx";

export const getAllProductos = async () => {
  let respuesta = localStorage.getItem(name_repo);
  if (respuesta == null) respuesta = "[]";
  const retorno = JSON.parse(respuesta);
  if (retorno == null) return [];
  return retorno;
};

const getDataUpdate = async (id: string) => {
  let data = await getAllProductos();
  let repo = data.filter((n: Producto) => !(n.id === id));
  let newData = data.find((n: Producto) => n.id === id);

  return [repo, newData];
};

const guardarData = (repo: Producto[], newData: Producto) => {
  repo.push(newData);
  localStorage.setItem(name_repo, JSON.stringify(repo));
  return true;
};

//ver que onda
export const cantidadTotalProductos = async () => {
  const data = await getAllProductos();
  return [...data].reduce((total, n) => (total += n.vendidos), 0);
};

//ver que onda
export const valorTotalProductos = async () => {
  const data = await getAllProductos();
  return [...data].reduce((total, n) => (total += n.precio * n.vendidos), 0);
};

export const addProducto = async (producto: Producto) => {
  let data = await getAllProductos();

  let id = getIdProductos();
  if (id == null) {
    initialIdProductos();
    producto.id = "0";
  } else producto.id = id;

  data.push(producto);
  localStorage.setItem(name_repo, JSON.stringify(data));
  return true;
};

export const deleteProducto = async (id: string) => {
  let data = await getAllProductos();
  const newData = data.filter((n: Producto) => !(n.id === id));
  localStorage.setItem(name_repo, JSON.stringify(newData));
  return true;
};

export const deleteAllProductos = async () => {
  localStorage.setItem(name_repo, JSON.stringify([]));
  return true;
};

export const updateProductoElement = async (
  id: string,
  newProducto: { nombre: string; precio: number; vendidos: number }
) => {
  const [repo, newData] = await getDataUpdate(id);

  if (newData.nombre !== newProducto.nombre)
    newData.nombre = newProducto.nombre;
  if (newData.precio !== newProducto.precio)
    newData.precio = newProducto.precio;
  if (newData.vendidos !== newProducto.vendidos)
    newData.vendidos = newProducto.vendidos;
  guardarData(repo, newData);
};

export const updateEstadoProducto = async (id: string, newEstado: boolean) => {
  const [repo, newData] = await getDataUpdate(id);
  newData.habilitado = newEstado;
  guardarData(repo, newData);
};

export const addUnoCantidadProducto = async (id: string) => {
  const [repo, newData] = await getDataUpdate(id);
  newData.vendidos += 1;
  guardarData(repo, newData);
};

export const removeUnoCantidadProducto = async (id: string) => {
  const [repo, newData] = await getDataUpdate(id);
  newData.vendidos -= 1;
  guardarData(repo, newData);
};
