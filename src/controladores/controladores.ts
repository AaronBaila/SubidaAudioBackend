import {Request, Response} from 'express';
import {modeloEmpleados} from '../modelos/modelo';
import multer from "multer";

//CONFIGURACION MULTER:

//Se crea la variable con la configuracion de almacenaje, donde y nombre con el que se va a almacenar.
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/')
    },

    filename: function(req, file, cb){
        cb(null, 'Temica' + '-' + Date.now() + ".mp3")
    }
})

//Se crea una variable upload con el objeto multer con su configuracion
const upload = multer({storage: storage});


//FUNCIONES:

//Al ser una funcion asincrona es necesario añadir el Promise para el return
export  async function getTodo(req: Request, res: Response): Promise<Response> {
    var empleados = await modeloEmpleados.find();
    return res.json({empleados});
}

export async function getUno(req: Request, res: Response): Promise<Response> {
    var empleado = await modeloEmpleados.findById(req.params.id);
    console.log(empleado);
    return res.json(empleado);
}

export  function publicar(req: Request, res: Response): Response {
    var empleado = new modeloEmpleados(req.body);
    console.log(empleado);
    empleado.save();
    return res.json('Dato creado');
}

export async function subirTrak(req: Request, res: Response): Promise<Response>{
    await upload.single('trak') (req, res, (err) => {
        if(err){
            console.log(err.message);
        }else if(!req.body.nombre){
            console.log("Es necesario insertar un nombre")
        }
        console.log(req.body.nombre);
        console.log("File: " + req.file);
    });

    return res.json({"status":"Archivo subido con exito"})
}

export async function modificar(req: Request, res: Response): Promise<Response> {
    var empleado1 = {
        nombre : req.body.nombre,
        edad : req.body.edad,
        puesto : req.body.puesto
    };
    await modeloEmpleados.findByIdAndUpdate(req.params.id, {$set: empleado1}, {new:true});
    return res.send('Dato modificado');
}

export async function eliminar(req: Request, res: Response): Promise <Response> {
    await modeloEmpleados.findByIdAndRemove(req.params.id);
    return res.send('Dato eliminado');
}

export async function eliminarTodo(req: Request, res: Response): Promise<Response>{
    await modeloEmpleados.deleteMany({})
    return res.send('Todos los datos eliminados');
}