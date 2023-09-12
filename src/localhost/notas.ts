import { Nota } from "../types";
import { v4 as uuidv4 } from 'uuid';

const name_repo = "xx-general-notas-xx";

export const getAllNotas = async () => {
  const respuesta = localStorage.getItem(name_repo);
  if (respuesta == null) return [];
  return JSON.parse(respuesta);
};

export const addNota = async (nota: Nota) => {
  let respuesta = localStorage.getItem(name_repo);
  if (respuesta == null) respuesta = "[]";
  let data = JSON.parse(respuesta);

  nota.id = uuidv4();

  data.push(nota);
  localStorage.setItem(name_repo, JSON.stringify(data));
  return nota;
};

export const updateNota = async (nota: Nota) => {
  let respuesta = localStorage.getItem(name_repo);
  if (respuesta == null) respuesta = "[]";
  let data = JSON.parse(respuesta);
  const newData = data.filter((n: Nota) => !(n.id === nota.id));
  newData.push(nota);
  localStorage.setItem(name_repo, JSON.stringify(newData));
  return newData;
};

export const updateAllNota = async (notas: Nota[]) => {
  localStorage.setItem(name_repo, JSON.stringify(notas));
  return notas;
};

export const deleteNota = async (id: string) => {
  let respuesta = localStorage.getItem(name_repo);
  if (respuesta == null) respuesta = "[]";
  let data = JSON.parse(respuesta);
  const newData = data.filter((n: Nota) => !(n.id === id));
  localStorage.setItem(name_repo, JSON.stringify(newData));
  return newData;
};

export const deleteAllNotas = async () => {
  localStorage.setItem(name_repo, JSON.stringify([]));
  return true;
};
