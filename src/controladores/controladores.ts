import {Request, Response} from 'express';


export  function getTodo(req: Request, res: Response): Response {
    return res.send('HelloWord');
}

export function getUno(req: Request, res: Response): Response {
    return res.send('HelloWord');
}

export  function publicar(req: Request, res: Response): Response {
    return res.send('HelloWord');
}

export function modificar(req: Request, res: Response): Response {
    return res.send('HelloWord');
}

export function eliminar(req: Request, res: Response): Response {
    return res.send('HelloWord');
}
