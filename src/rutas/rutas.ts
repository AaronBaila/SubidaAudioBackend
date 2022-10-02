import { Router } from "express";
import {getTodo} from "../controladores/controladores";

const router = Router();

router.route('/').get(getTodo);
router.route('/:id').get();
router.route('/').post();
router.route('/:id').put();
router.route('/').delete();



export {router};