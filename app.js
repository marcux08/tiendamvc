import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { testclientes } from './backend/controllers/clientes.controller.js';  
import { testempleados } from './backend/controllers/empleados.controller.js'; 
import { testgerentes } from './backend/controllers/gerentes.controller.js';
import { testproductos } from './backend/controllers/productos.controller.js';
import { testpromociones } from './backend/controllers/promociones.controller.js'; 
dotenv .config();

mongoose.connect(process.env.urldb)




.then(()=>{
    console.log('sis')
})
.catch((err)=>{
    console.log('nel')
})


const app = express();
app.use(cors())
app.listen(4001,()=>{
    console.log("esta funcionando correctamente el servidor")
})
testclientes()
testempleados()
testgerentes()
testproductos()
testpromociones()