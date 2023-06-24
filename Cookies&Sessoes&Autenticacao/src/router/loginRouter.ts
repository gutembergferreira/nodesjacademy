import express from 'express';
import { 
    getLogin,
    validatelogin,
    logout 
} from '../controllers/loginController';



const router = express.Router();


router.get('/login', getLogin);
router.post('/login', validatelogin);

router.get('/logout', logout);

export default router;
