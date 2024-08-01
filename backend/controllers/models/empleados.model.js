import { Schema, model } from 'mongoose';

const empleadoSchema = new Schema({
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
    puesto: {
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

export const Empleado = model('Empleado', empleadoSchema);
