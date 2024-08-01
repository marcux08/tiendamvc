import { Gerente } from './models/gerentes.model.js';

export const testgerentes = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un gerente de prueba
Gerente.create({
    nombre: 'Carlos',
    apepat: 'Ramirez',
    apemat: 'Lopez',
    departamento: 'Ventas',
    salario: 90000,
    fechaContratacion: new Date('2022-05-20')
});
