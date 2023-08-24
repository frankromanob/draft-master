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
            return getDraftList(req,res)
        default:
            return res.status(400).json({
                message:'Bad Request'
            })
    }
}

const getDraftList = async (req: NextApiRequest,res: NextApiResponse<Data>) => {


    await db.connect()

    const jugadores = await Jugadores.find({pick:{$ne: 0}}).sort({"pick":1}).lean()
    await db.disconnect()
    res.status(200).json(jugadores)
}

