const {MongoClient} = require('mongodb')
//import mongoose from 'mongoose'

let db

MongoClient.connect('mongodb://localhost/baseDatos', (err, client) => {
    if(err){
        console.log(err)
        process.exit(0)
    }
    //Creamos la BBDD
    //Almacenamos la BBDD que obtenemos mediante la conexion en la variable db para luego poder usar esta DB en cualquier otro documento TS
    db = client.db('baseDatos')
    console.log("Conectado a la BBDD")
})

//Creamos una funcion conexionBBDD la cual retorna el objeto DB y asi podemos obtenerlo desde otros documentos
//La forma de abajo es otra manera de declarar funciones de una manera mas simple (Pero es una funcion como cualquier otra)
const conexionBBDDBuena = () => db

/*Conexion con Mongoose (No hace falta)
export async function conexionBBDD(){
    await mongoose.connect('mongodb://127.0.0.1/baseDatos')
        .then(db => console.log("Conectado a la BBDD"))
        .catch(err => console.log("Error al conectarse a la BBDD: " +  "  " + err));
};*/


//Exportamos la funcion conecionBBDD para poder acceder a ella desde otros documentos
module.exports = {
    conexionBBDDBuena
}