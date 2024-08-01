import { Schema, model } from 'mongoose';

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apepat: {
        type: String,
        required: true
    },
    apemat: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        calle: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        codigoPostal: {
            type: String,
            required: true
        }
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
});

export const Cliente = model('Cliente', clienteSchema);
