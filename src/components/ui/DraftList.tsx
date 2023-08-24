import { List, Paper } from "@mui/material"
import { DragEvent, useContext, useMemo } from "react";
import { EntriesContext } from "@/context/entries";
import { DraftCard } from "./DraftCard";


export const DraftList = () => {

    const { jugador } = useContext(EntriesContext)

    const entriesByStatus = useMemo(() => jugador.filter(jugador => jugador.equipo !="Draft"), [jugador])


    return (
        <div >
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}>
                <List>
                    {
                        entriesByStatus.map(jugador => (
                            <DraftCard key={jugador.codigo} jugador={jugador} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}
