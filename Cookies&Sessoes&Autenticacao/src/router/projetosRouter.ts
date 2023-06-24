import express from 'express';
import {
  createProjeto,
  getProjetos,
  getProjetoById,
  updateProjeto,
  deleteProjeto,
} from '../controllers/projetosController';

const router = express.Router();

router.post('/projetos', createProjeto);
router.get('/projetos', getProjetos);
router.get('/projetos/:id', getProjetoById);
router.put('/projetos/:id', updateProjeto);
router.delete('/projetos/:id', deleteProjeto);

export default router;
