import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { Jugador } from '../../interfaces';
import Image from 'next/image';


interface Props {
    jugador: Jugador;
}

export const DraftCard = ({ jugador }: Props) => {


    const logo = `/img/${jugador.equipo}.png`
    return (
        <Card
            sx={{ marginBottom: 1 }}
        >
            <CardActionArea>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image alt={jugador.equipo} src={logo} width='60' height="35" />
                        <div style={{display:'flex',flexDirection:'row',justifyContent: 'space-between', alignItems: 'center',marginTop:2}}>
                            <Typography sx={{fontFamily: 'serif', whiteSpace: 'pre-line' }} > Pick: {jugador.pick}</Typography>
                            <Typography sx={{ whiteSpace: 'pre-line' }} > {jugador.nombre}, {jugador.posicion}</Typography>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
