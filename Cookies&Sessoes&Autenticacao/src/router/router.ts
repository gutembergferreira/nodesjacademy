import { Router } from 'express';
import mainController from '../controllers/main';
import departamentosRouter from './departamentosRouter'
import dependentesRouter from './dependentesRouter'
import funcionariosRouter from './funcionariosRouter'
import projetosRouter from './projetosRouter'
import loginRouter from './loginRouter'
import { authMiddleware } from '../middlewares/auth'

const router = Router();

// Main controller
router.get('/',authMiddleware,mainController.index);
router.get('/about',authMiddleware, mainController.about);
router.get('/ui',authMiddleware, mainController.ui);


router.use(departamentosRouter);
router.use(dependentesRouter);
router.use(funcionariosRouter);
router.use(projetosRouter);
router.use(loginRouter);


export default router;
