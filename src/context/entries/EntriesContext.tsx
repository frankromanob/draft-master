import { Jugador } from '@/interfaces';
import { createContext } from 'react';

export interface contextProps {
    jugador: Jugador[];
    //Methods
   // addNewEntry: (description: string) => void;
    updateJugador: (jugador:Jugador) => void;
   // deleteEntry: (jugador:Jugador) => void;
    refreshJugadores:()=> void;
}

export const EntriesContext = createContext({} as contextProps);

