import { Jugador } from '@/interfaces';
import { JugadorState } from './';

type EntriesActionType =
   // | { type: 'Entries - AddEntry', payload: Jugador }
    | { type: 'Entries - UpdateEntry', payload: Jugador }
    | { type: 'Entries - LoadEntries', payload: Jugador[] }


export const entriesReducer = (state: JugadorState, action: EntriesActionType): JugadorState => {

    switch (action.type) {
        // case 'Entries - AddEntry':
        //     return {
        //         ...state,
        //         jugadores: [...state.jugadores, action.payload]
        //         // sideBarOpen: true,
        //     }
        case 'Entries - UpdateEntry':
            return {
                ...state,
                jugador: state.jugador.map(jugador => {
                    if (jugador.codigo === action.payload.codigo) {
                        jugador.equipo = action.payload.equipo;
                        jugador.pick=action.payload.pick;
                    }
                    return jugador
                })
                // sideBarOpen: true,
            }
        case 'Entries - LoadEntries':
            return {
                ...state,
                jugador: [...action.payload]
                // sideBarOpen: true,
            }
        default:
            return state;
    }
};