import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/db'
import { Jugadores } from '@/models'
import { Jugador } from '../../../interfaces';

type Data =
    | { message: string}
    | Jugador[]
    | Jugador


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method){
        case 'GET':
            return getJugadores(req,res)
        default:
            return res.status(400).json({
                message:'Bad Request'
            })
    }
}

const getJugadores = async (req: NextApiRequest,res: NextApiResponse<Data>) => {


    await db.connect()

    const jugadores = await Jugadores.find().sort({"pick":1,"ronda":1}).lean()
    await db.disconnect()
    res.status(200).json(jugadores)
}

