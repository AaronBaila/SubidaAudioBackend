import {conexionServidor} from './app';
//import { conexionBBDD } from './database';

//Llama a conexion Servidor, por lo tanto se ejecuta app.ts y llama a Router el cual ejecuta rutas.ts y procesa todas las rutas (router.route('/').get(getTodo);) por lo tanto ejecuta el BBDD

function iniciarServidor(){
    //conexionBBDD();
    conexionServidor();
};

iniciarServidor();


