// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../db/';
import { Jugadores } from '@/models';
import { jugadoresData } from '@/db/';

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>)
{


    // if (process.env.NODE_ENV === 'production') {
    //     return res.status(401).json({ message: 'No es posible para producción' })
    // }

    await db.connect();

    await Jugadores.deleteMany();
    await Jugadores.insertMany(jugadoresData.listaJugadores.jugadores)


    await db.disconnect();

    res.status(200).json({ message: 'Proceso completado correctamente.' })
}
