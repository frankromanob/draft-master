import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/db'
import { Jugadores } from '@/models'
import { Jugador } from '../../../interfaces';

type Data =
    | { message: string }
    | Jugador


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'PUT':
            return updateJugador(req, res)
        case 'GET':
            return findJugador(req, res)
        default:
            return res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const findJugador = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { codigo="00" }= req.query;

    await db.connect()

    const jugadorToFind = await Jugadores.findOne({ codigo: codigo}  );

    if (!jugadorToFind) {
        await db.disconnect()
        return res.status(400).json({ message: 'Id no existe: ' + codigo })
    }

    await db.disconnect()
    return res.status(200).json(jugadorToFind)

}


const updateJugador = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { codigo } = req.query;

    await db.connect()


    const jugadorToUpdate = (await Jugadores.findOne({codigo:codigo}));

    if (!jugadorToUpdate) {
        await db.disconnect()
        return res.status(400).json({ message: 'Id does not exist: ' + codigo })
    }


    const {
        equipo = jugadorToUpdate.equipo,
        pick = jugadorToUpdate.pick,
        ronda=jugadorToUpdate.ronda,
    } = req.body

    try {
        jugadorToUpdate.equipo = equipo
        jugadorToUpdate.pick = pick
        jugadorToUpdate.ronda=ronda
        await jugadorToUpdate.save()
        await db.disconnect()
        return res.status(201).json(jugadorToUpdate)
    } catch {
        await db.disconnect()
        return res.status(400).json({ message: 'Cannot update' })
    }
}

