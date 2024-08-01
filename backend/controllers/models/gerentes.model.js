import { Schema, model } from 'mongoose';

const gerenteSchema = new Schema({
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
    departamento: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    fechaContratacion: {
        type: Date,
        default: Date.now
    }
});

export const Gerente = model('Gerente', gerenteSchema);
