import express from 'express'; //Importo express
import morgan from 'morgan';
import { router } from './rutas/rutas';
const app = express();


//Opciones
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api', router); //Indicamos que la ruta /api la procese con router

async function conexionServidor(){
    await app.listen(app.get('port'));
    console.log('Conectado al servidor en el puerto ' + app.get('port'));
};

export {conexionServidor}; //Exporto el archivo app para usarlo desde el index.ts