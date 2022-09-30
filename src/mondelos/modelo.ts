import mongoose from "mongoose";

//Buscar que es
const {Schema} = mongoose;

const empleados = new Schema({
    nombre : String,
    edad : Number,
    puesto : String
});

interface iEmpleados extends Document{
    nombre : String,
    edad : Number,
    puesto : String
};

//Creamos el modelo de datos indicandole que tiene que cumplir con la estructura de datos de la interfaz
const modeloEmpleados = mongoose.model<iEmpleados>("empleados", empleados);

//Exporto el modelo
export {modeloEmpleados};





