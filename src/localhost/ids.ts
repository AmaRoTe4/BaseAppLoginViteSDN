const idProd = "xx-id-productos-xx";
const idNotas = "xx-id-notas-xx";

export const getIdNotas = () => {
  return localStorage.getItem(idNotas) ?? "0";
};

export const initialIdNotas = () => {
  return localStorage.setItem(idNotas, "0");
};

export const getIdProductos = () => {
  return localStorage.getItem(idProd) ?? "0";
};

export const initialIdProductos = () => {
  return localStorage.setItem(idProd, "0");
};

export const id_incremente_notas = () => {
  let id = Number(localStorage.getItem(idNotas));
  if (id == null) return;
  id += 1;
  localStorage.setItem(idNotas, id.toString());
};

export const id_incremente_productos = () => {
  let id = Number(localStorage.getItem(idProd));
  if (id == null) return;
  id += 1;
  localStorage.setItem(idProd, id.toString());
};
