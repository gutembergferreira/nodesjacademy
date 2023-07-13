import { Router } from 'express';
import usuarioController from './usuario.controller';
import checkAdmin from '../../middlewares/checkAdmin';

const router = Router();

router.get('/', checkAdmin, usuarioController.index);
router.post('/', checkAdmin, usuarioController.create);
router.get('/:id', checkAdmin, usuarioController.read);
router.put('/:id', checkAdmin, usuarioController.update);
router.delete('/:id', checkAdmin, usuarioController.remove);

export default router;
