import { PropsWithChildren, useEffect, useReducer } from 'react';
import { entriesReducer, EntriesContext } from '.';
import { Jugador } from '@/interfaces';
import { jugadoresData } from '../../db'

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
        // await entriesApi.put<Entry>(`/entries/${entry._id}`, { description: entry.description, status: entry.status })
         //await entriesApi.post('/entries', data)

      } catch (error) {

      }
      dispatch({ type: 'Entries - UpdateEntry', payload: jugador })
      //refreshJugadores()
   }

   const refreshJugadores = async () => {
      const { jugadores } = jugadoresData.listaJugadores
      dispatch({ type: 'Entries - LoadEntries', payload: jugadores })
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
