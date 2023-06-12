import { Router } from "express";
import mainController from "../controllers/main";
import { logMiddleware } from '../utils/logger';
import loremController from "../controllers/lorem";

const router = Router();
router.get("/", logMiddleware('completo'), mainController.principal);
router.get("/sobre", logMiddleware('completo'), mainController.sobre);
router.get("/hb1", logMiddleware('completo'), mainController.hb1);
router.get("/hb2", logMiddleware('completo'), mainController.hb2);
router.get("/hb3", logMiddleware('completo'), mainController.hb3);
router.get("/hbprofs", logMiddleware('completo'), mainController.hb4profs);
router.get("/hb4", logMiddleware('completo'), mainController.hb4);
router.get("/lorem", logMiddleware('completo'),loremController.serverLorem);

export default router;
