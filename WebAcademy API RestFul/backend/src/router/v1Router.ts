import { Router } from 'express';
import pingRouter from '../resources/ping/ping.router';
import produtoRouter from '../resources/produto/produto.router';
import usuarioRouter from '../resources/usuario/usuario.router';
import compraRouter from '../resources/compra/compra.router';
import compraItemRouter from '../resources/compraItem/compraItem.router';
import tipoUsuarioRouter from '../resources/tipoUsuario/tipoUsuario.router';
import authRouter from '../resources/auth/auth.router';

const router = Router();

router.use('/ping', pingRouter);
router.use('/produto', produtoRouter);
router.use('/usuario', usuarioRouter);
router.use('/compra', compraRouter);
router.use('/compraItem', compraItemRouter);
router.use('/tipo-usuario', tipoUsuarioRouter);
router.use('/', authRouter);

export default router;
