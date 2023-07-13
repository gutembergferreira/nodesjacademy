import { Router } from 'express';
import compraController from './compra.controller';

const router = Router();

router.get('/', compraController.index);
router.post('/', compraController.create);
router.get('/:id', compraController.read);
router.put('/:id', compraController.update);
router.delete('/:id', compraController.remove);

export default router;
