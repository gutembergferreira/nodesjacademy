import express from 'express';
import {
  createDependente,
  getDependentes,
  getDependenteById,
  updateDependente,
  deleteDependente,
} from '../controllers/dependentesController';

const router = express.Router();

router.post('/dependentes', createDependente);
router.get('/dependentes', getDependentes);
router.get('/dependentes/:id', getDependenteById);
router.put('/dependentes/:id', updateDependente);
router.delete('/dependentes/:id', deleteDependente);

export default router;
