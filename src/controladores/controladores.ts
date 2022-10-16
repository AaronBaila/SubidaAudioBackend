import {Request, Response} from 'express';
/*import {modeloEmpleados} from '../modelos/modelo';
const {GridFSBucket} = require ('mongodb')
//const {Readable} = require ('stream')
const {conexionBBDDBuena} = require('../database')*/

//FUNCIONES:
//Al ser una funcion asincrona es necesario añadir el Promise para el return
export  async function getTodo(req: Request, res: Response): Promise<Response> {

    let db = conexionBBDDBuena()

    var empleados = await conexionBBDDBuena
    console.log(empleados)
    return res.json({empleados})

    /*var empleados = await modeloEmpleados.find();
    return res.json({empleados});*/
}

/*export async function getUno(req: Request, res: Response): Promise<Response> {
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

export function subirTrak(req: Request, res: Response): Response{

    //MULTER
    if(!req.body.nombre){
        console.log("Debes poner un nombre")
        return res.json({"status":"ERROR: Debes poner un nombre, se le asigna undefined"})
    }
    
    if(!req.file){
        console.log("No hay archivo")
        return res.json({"status":"ERROR: No hay archivo"})
    }

    console.log(req.file)
    console.log(req.body.nombre)

    //GRIDFS

    const midb = conexionBBDDBuena()
    console.log("Base de datos: " + midb)
    var bucket = new GridFSBucket(midb, {bucketName: 'traks'})

    console.log(req.body.nombre)
    const nombre = req.body.nombre

    //Pasamos el archivo de audio del buffer a stream
    console.log(req.file.buffer)
    const readableTrakStream = new Readable()
    //Mediante readableTrakStream podemos pasar el audio al BackEnd de Mongodb en formato stream
    readableTrakStream.push(req.file.buffer)

    let uploadStream = bucket.openUploadStream(nombre)
    const id = uploadStream.id
    //Aqui le pasamos el audio del stream al backEnd uploadStream es el backEnd de MongoDB
    readableTrakStream.pipe(uploadStream)

    //Al ser un stream, tenemos eventos
    //Eventos Stream:
    uploadStream.on('error', () => {
        return res.json({'Err': 'Error'})
    })

    uploadStream.on('finish', () => {
        return res.json({'Estado': 'Archivo subido con exito, con ID: ' + id})
    })

    return res.json({"status":"Error Inesperado...."})
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
}*/
