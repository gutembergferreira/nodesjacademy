import { Router } from 'express';
import checkAdmin from '../../middlewares/checkAdmin';
import checkAuth from '../../middlewares/checkAuth';
import produtoController from './produto.controller';

const router = Router();

router.get('/', checkAuth, produtoController.index);
router.post('/', checkAdmin, produtoController.create);
router.get('/:id', checkAdmin, produtoController.read);
router.put('/:id', checkAdmin, produtoController.update);
router.delete('/:id', checkAdmin, produtoController.remove);

export default router;
