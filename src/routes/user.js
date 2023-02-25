import { Router } from 'express';

const router = Router();

const getUserContext = req => req.context.models.users;

router.get('/', (req, res) => {
    return res.send(Object.values(getUserContext(req)));
});

router.get('/:userId', (req, res) => {
    return res.send(getUserContext(req)[req.params.userId]);
});

export default router;