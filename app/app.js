import express from 'express';
import message from './config/message.js';

const app = express();

app.listen(3000,()=>{
    // console.log('Hola mundo');
    // document.write('Listado en el puerto 3000');
    message('Hola mundo', 'warning');
})