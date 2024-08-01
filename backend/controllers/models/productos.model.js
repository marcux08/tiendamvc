import { Schema, model } from 'mongoose';

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    fechaAgregado: {
        type: Date,
        default: Date.now
    }
});

export const Producto = model('Producto', productoSchema);
