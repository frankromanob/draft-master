import mongoose, { Schema, model, Model } from 'mongoose'
import { Jugador } from '@/interfaces'

const jugadoresSchema = new Schema({
    codigo: { type: Number },
    nombre: { type: String },
    vicepresidencia: { type: String },
    area: { type: String },
    posicion: {type: String},
    estatura: { type: String },
    equipo: {
        type: String,
        enum: {
            values: ['5G', 'AlticePower', 'LosPro', 'AltaGama', 'Draft',],
            message: '{VALUE} no es un equipo permitida'
        }
    },
    ronda: { type: String },
    pick: { type: String },
}, {
    timestamps: true
})

jugadoresSchema.index({ title: 'text', tags: 'text' });

const Jugadores: Model<Jugador> = mongoose.models.Jugadores || model('Jugadores', jugadoresSchema);

export default Jugadores