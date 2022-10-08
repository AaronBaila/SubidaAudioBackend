import { Router } from "express";
import {eliminar, eliminarTodo, getTodo, getUno, modificar, publicar, subirTrak} from "../controladores/controladores";

const router = Router();

router.route('/').get(getTodo);
router.route('/:id').get(getUno);
router.route('/').post(publicar);
router.route('/:id').put(modificar);
router.route('/:id').delete(eliminar);
router.route('/').delete(eliminarTodo);
router.route('/subidas').post(subirTrak);

export {router};