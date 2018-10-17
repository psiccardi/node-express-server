import { Router } from 'express';
import { registerMid, loginMid, logoutMid } from '../../middleware/user';

const router = Router();

router.post('/register', registerMid);
router.post('/login', loginMid);
router.get('/logout', logoutMid);

export default router;
