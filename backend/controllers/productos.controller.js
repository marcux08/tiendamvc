import { Producto } from './models/productos.model.js';

export const testproductos = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un producto de prueba
Producto.create({
    nombre: 'Laptop',
    descripcion: 'Laptop de alta gama con 16GB de RAM y 512GB de SSD',
    precio: 1200,
    categoria: 'Electrónica',
    stock: 50,
    fechaAgregado: new Date()
});
