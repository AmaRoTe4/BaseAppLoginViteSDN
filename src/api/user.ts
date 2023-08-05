import { PASSWORD_SERVER_USER, URL_SERVER_USER } from "../const";

export const obtenerUser = async (id: string) => {
  if (id === "0" || id === undefined) return undefined;

  const response = await fetch(URL_SERVER_USER + id, {
    headers: {
      clave: PASSWORD_SERVER_USER,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));

  return response ? response : undefined;
};

export const obtenerUserByName = async (name: string) => {
  if (name === "0" || name === undefined) return undefined;

  const response = await fetch(URL_SERVER_USER + "/name/" + name, {
    headers: {
      clave: PASSWORD_SERVER_USER,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));

  return response ? response : undefined;
};

//export const conexion = async () => {
//  const respuesta = await fetch(URL_SERVER_DATA, {
//    headers: {
//      clave: PASSWORD_SERVER_USER,
//    },
//  })
//    .then((response) => response.json())
//    .catch((err) => console.error(err));

//  return Boolean(respuesta);
//};

//export const StatusApp = async () => {
//  const respuesta = await conexion();
//  if (!respuesta) {
//    cartelErrorLong("Server no disponible, espere unos minutos");
//    return false;
//  }
//  return true;
//};
