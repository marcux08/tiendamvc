import { Empleado } from './models/empleados.model.js';

export const testempleados = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un empleado de prueba
Empleado.create({
    nombre: 'Luis',
    apepat: 'Martinez',
    apemat: 'Gomez',
    puesto: 'Gerente',
    salario: 75000,
    fechaContratacion: new Date('2023-01-15')
});
