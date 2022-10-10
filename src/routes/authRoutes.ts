import { Router, Response } from 'express';
import { login, register } from '../controller/authController';
import { validateLogin, validateNewUser } from '../middleware/validations';

const router = Router();

router.get('/', (res: Response) => res.send('Route is working'));
router.post('/register', validateNewUser, register);
router.post('/login', validateLogin, login);
export default router;
