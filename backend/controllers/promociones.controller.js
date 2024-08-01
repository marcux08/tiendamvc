import { Promocion } from './models/promociones.model.js';

export const testpromociones = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear una promoción de prueba
Promocion.create({
    nombre: 'Descuento de Verano',
    descripcion: '20% de descuento en todos los productos electrónicos',
    descuento: 20,
    fechaInicio: new Date('2024-06-01'),
    fechaFin: new Date('2024-08-31')
});
