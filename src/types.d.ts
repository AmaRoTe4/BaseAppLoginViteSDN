
interface DatosCliente {
  nombre: string;
  telefono: string;
  correo: string;
  id_localidad: number;
  direccion: string;
  nobre_del_local: string;
  clave: string;
  salt: string;
}

interface Servicio {
  id_servicio: number;
  inicio_de_actividad: string;
  coutas_pagadas: Pago[];
  valor_de_cuotas: number;
  id_server: number;
}

export interface User {
  id?: string;
  _id?: string;
  cliente: DatosCliente;
  servicios: Servicio[];
  otros: object;
  estado: boolean;
  id_vendedor: number;
  estado_vista?: number;
}
