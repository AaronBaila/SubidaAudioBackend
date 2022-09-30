import {conexionServidor} from './app';
import { conexionBBDD } from './database';

function iniciarServidor(){
    conexionBBDD();
    conexionServidor();
};

iniciarServidor();


