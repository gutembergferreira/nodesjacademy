import express from 'express';
import {
  createFuncionario,
  getFuncionarios,
  getFuncionarioById,
  updateFuncionario,
  deleteFuncionario,
  getDependentesByFuncionarioId,
} from '../controllers/funcionariosController';
import { checkAuth, authMiddleware } from '../middlewares/auth';

const router = express.Router();

router.post('/funcionarios', checkAuth, authMiddleware, createFuncionario);
router.get('/funcionarios', checkAuth, authMiddleware, getFuncionarios);
router.get('/funcionarios/:id', checkAuth, authMiddleware, getFuncionarioById);
router.post('/funcionarios/:id', checkAuth, authMiddleware, updateFuncionario);
router.get('/funcionarios/:id/edit', checkAuth, authMiddleware, getFuncionarioById);
router.post('/funcionarios/:id/delete', checkAuth, authMiddleware, deleteFuncionario);

export default router;