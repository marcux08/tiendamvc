import { Cliente } from './models/clientes.model.js';

export const testclientes = () => {
    console.log("Llamando la función desde el controlador");
};


Cliente.create({
    nombre: 'Juan',
    apepat: 'Perez',
    apemat: 'Lopez',
    email: 'juan.perez@example.com',
    telefono: '1234567890',
    direccion: {
        calle: 'Calle Falsa',
        ciudad: 'Ciudad Real',
        estado: 'Estado Ejemplo',
        codigoPostal: '12345'
    }
});
