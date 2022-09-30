import express from 'express'; //Importo express
const app = express();

async function conexionServidor(){
    console.log("Hola")
    await app.listen(3000);
    console.log('Conectado a la BBDD');
};

export {conexionServidor}; //Exporto el archivo app para usarlo desde el index.ts