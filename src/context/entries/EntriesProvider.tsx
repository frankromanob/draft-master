import { PropsWithChildren, useEffect, useReducer } from 'react';
import { entriesReducer, EntriesContext } from '.';
import { Jugador } from '@/interfaces';
import { jugadoresData } from '../../db'
import jugadoresApi from '@/api/jugadoresApi';


export interface JugadorState {
   jugador: Jugador[]
}

const Entries_INITIAL_STATE: JugadorState = {
   jugador: []
}

export const EntriesProvider = ({ children }: PropsWithChildren) => {

   const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)


   const updateJugador = async (jugador: Jugador) => {
      try {
         await jugadoresApi.put<Jugador>(`/jugadores/${jugador.codigo}`, { equipo: jugador.equipo, pick: jugador.pick, ronda:jugador.ronda })
         //await entriesApi.post('/entries', data)
      } catch (error) {

      }
      dispatch({ type: 'Entries - UpdateEntry', payload: jugador })
      //refreshJugadores()
   }

   const refreshJugadores = async () => {
         const { data } = await jugadoresApi.get<Jugador[]>('/jugadores')
     // const { jugadores } = jugadoresData.listaJugadores
      dispatch({ type: 'Entries - LoadEntries', payload: data })
   }

   useEffect(() => {
      refreshJugadores()
   }, [])


   return (
      <EntriesContext.Provider value={{
         ...state,
         //Methods
      //  addNewEntry,
       // deleteEntry,
         updateJugador,
         refreshJugadores
      }}>
         {children}
      </EntriesContext.Provider>
   )
}
