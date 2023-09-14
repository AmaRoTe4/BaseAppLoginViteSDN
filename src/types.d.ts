export interface Ruta {
  id: string;
  url: string;
  titulo: string;
}
export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  costo: number;
  vendidos: number;
  estado: boolean;
}

export interface Nota {
   id: string ;
   text:string
}

export interface Setting {
  id:string
  name:string
  varible:string
  options:string[]
}