import express from 'express';
import {
  createDepartamento,
  getDepartamentos,
  getDepartamentoById,
  updateDepartamento,
  deleteDepartamento,
} from '../controllers/departamentosController';
import { checkAuth,authMiddleware } from '../middlewares/auth'

const router = express.Router();

router.post('/departamentos', checkAuth,authMiddleware,createDepartamento);
router.get('/departamentos', checkAuth, authMiddleware, getDepartamentos);
router.get('/departamentos/:id',checkAuth,authMiddleware, getDepartamentoById);
router.post('/departamentos/:id',checkAuth,authMiddleware, updateDepartamento);
router.get('/departamentos/:id/edit',checkAuth,authMiddleware, getDepartamentoById);
router.post('/departamentos/:id/delete',checkAuth,authMiddleware, deleteDepartamento);


export default router;