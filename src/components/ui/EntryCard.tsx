import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { Jugador } from '../../interfaces';
import { DragEvent, useContext } from "react";
import { UIContext } from "@/context/ui";


interface Props {
    jugador: Jugador;
}

export const EntryCard = ({ jugador}: Props) => {

   const { startDragging, stopDragging } = useContext(UIContext)

    const onDragStart = (event: DragEvent) => {
       startDragging()
        event.dataTransfer.setData('nombre', jugador.nombre)
    }

    const onDragEnd = () => {
       stopDragging()
    }

    return (
        <Card
            sx={{ marginBottom: 1 }}
           draggable
           onDragStart={onDragStart}
           onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }} >{jugador.nombre}, {jugador.posicion}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
