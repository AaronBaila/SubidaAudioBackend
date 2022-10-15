import { Router } from "express";
import {eliminar, eliminarTodo, getTodo, getUno, modificar, publicar, subirTrak} from "../controladores/controladores";
import multer from "multer";

//CONFIGURACION MULTER:
//Se crea la variable con la configuracion de almacenaje, donde y nombre con el que se va a almacenar.
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/')
    },

    filename: function(req, file, cb){
        cb(null, "Temica" + '-' + Date.now() + ".mp3")
    }
})

//Se crea una variable upload con el objeto multer con su configuracion
const upload = multer({storage: storage});


const router = Router();

router.route('/').get(getTodo);
router.route('/:id').get(getUno);
router.route('/').post(publicar);
router.route('/:id').put(modificar);
router.route('/:id').delete(eliminar);
router.route('/').delete(eliminarTodo);
router.route('/subidas').post(upload.single('trak'), subirTrak);

export {router};