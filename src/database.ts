import mongoose from 'mongoose';

export function conexionBBDD(){
    mongoose.connect('mongodb://127.0.0.1/baseDatos')
        .then(db => console.log("Conectado a la BBDD"))
        .catch(err => console.log("Error al conectarse a la BBDD" + err));
};
