import {Request, Response} from 'express';
import {modeloEmpleados} from '../modelos/modelo';

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
    console.log(req.file)
    console.log(req.body.nombre)
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
