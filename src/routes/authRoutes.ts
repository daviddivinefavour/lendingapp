import { Router, Response } from 'express';

const router = Router();

router.get('/', (res: Response) => res.send('Route is working'));

export default router;
