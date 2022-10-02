import {Request, Response} from 'express';


function getTodo(req: Request, res: Response): Response {
    return res.send('HelloWord');
}

function getUno(req: Request, res: Response): Response {
    return res.send('HelloWord');
}

function publicar(req: Request, res: Response): Response {
    return res.send('HelloWord');
}

function modificar(req: Request, res: Response): Response {
    return res.send('HelloWord');
}

function eliminar(req: Request, res: Response): Response {
    return res.send('HelloWord');
}

export * from './controladores';