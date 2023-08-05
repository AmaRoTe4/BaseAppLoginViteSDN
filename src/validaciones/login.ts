import { obtenerUser } from "../api/user";
import { cartelError } from "../functions/carteles";
import { User } from "../types";

export const validarLogin = async (id: string) => {
  if (id === "") {
    cartelError("Tiene que ingresar un id valido");
    return { resultado: false };
  }

  const respuesta: User = await obtenerUser(id);

  if (!respuesta || respuesta?.id === "") {
    cartelError("El usuario no existe");
    return { resultado: false };
  }

  if (!respuesta?.estado) {
    cartelError(
      "El estado de este usuario es invalido, revise los terminos o hable con el responsable del programa"
    );
    return { resultado: false };
  }

  if (!(respuesta?.servicios[0].id_servicio === 3)) {
    cartelError(
      "El servicio de este usuario no corresponde a esta aplicacion, revise los terminos o hable con el responsable del programa"
    );
    return { resultado: false };
  }

  return {
    resultado: true,
    user: respuesta,
  };
};
