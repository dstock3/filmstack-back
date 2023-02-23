import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.route('/')
  .get((req, res) => {
    return res.send(Object.values(req.context.models.directMessages));
  })
  .post((req, res) => {
    const id = uuidv4();
    const directMessage = {
      id,
      text: req.body.text,
      userId: req.context.me.id,
    };
    
    req.context.models.directMessages[id] = directMessage;

    return res.send(directMessage);
  });

router.route('/:dmid')
  .get((req, res) => {
    return res.send(req.context.models.directMessages[req.params.dmid]);
  })
  .delete((req, res) => {
    const {
      [req.params.dmid]: message,
      ...otherMessages
    } = req.context.models.directMessages;
    
    req.context.models.directMessages = otherMessages;

    return res.send(message);
  });

export default router;
