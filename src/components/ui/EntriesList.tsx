import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EquipoAsignado } from '../../interfaces/jugador';
import { DragEvent, useContext, useMemo } from "react";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

import styles from './EntryList.module.css'

interface Props {
    equipo: EquipoAsignado;
    ronda?:string;
}

export const EntriesList = ({ equipo,ronda="" }: Props) => {

    const { jugador,updateJugador } = useContext(EntriesContext)

    const { laRonda,isDragging,stopDragging} = useContext(UIContext)

    const entriesByStatus = useMemo(() => jugador.filter(jugador => jugador.equipo === equipo && jugador.ronda===ronda), [jugador])

    const onDropEntry = (event: DragEvent) => {
        const nombre = event.dataTransfer.getData('nombre');
        const eljugador= jugador.find(e=> e.nombre===nombre)!;
        eljugador.equipo = equipo;
        //TODO: ronda del estado
        eljugador.equipo=='Draft'? eljugador.ronda=(laRonda+1).toString() : eljugador.ronda="";
        updateJugador(eljugador);
        stopDragging();
    }

    const allowDrop = (event: DragEvent) => {
        event.preventDefault();
    }

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging?styles.dragging:''}
        >
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}>
                <List sx={{ opacity: isDragging ? 0.1:1, transition:'all 0.3s' }}>
                    {
                        entriesByStatus.map(jugador => (
                            <EntryCard key={jugador.nombre} jugador={jugador}/>
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}
