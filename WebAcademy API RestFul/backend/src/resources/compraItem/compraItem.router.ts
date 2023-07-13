import { Router } from 'express';
import compraItemController from './compraItem.controller';

const router = Router();

router.get('/', compraItemController.index);
router.post('/', compraItemController.create);
router.get('/:id', compraItemController.read);
router.put('/:id', compraItemController.update);
router.delete('/:id', compraItemController.remove);

export default router;
