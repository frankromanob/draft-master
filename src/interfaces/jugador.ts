

export interface Jugador {
    codigo: number;
    nombre: string;
    vicepresidencia: string;
    area:string;
    confirmacion:string;
    posicion:string;
    estatura: string;
    equipo:EquipoAsignado;
    ronda:string;
    pick:string;
}

export type Posiciones = 'G'|'PG'|'F'|'SG'|'C';

export type EquipoAsignado ='AlticePower'|'5G'|'AltaGama'|'LosPro'|'Draft'