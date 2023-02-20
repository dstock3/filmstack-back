import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import models from './models';

const app = express();

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  console.log(models)
  res.send('root get request');
});

app.get('/session/', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});

app.get('/users', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

app.get('/users/:userid', (req, res) => {
  return res.send(req.context.models.users[req.params.userid]);
});

app.get('/direct-messages', (req, res) => {
  return res.send(Object.values(req.context.models.directMessages));
});

app.get('/direct-messages/:dmid', (req, res) => {
  return res.send(req.context.models.directMessages[req.params.dmid]);
});

app.post('/direct-messages', (req, res) => {
  const id = uuidv4();
  const directMessage = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };
  req.context.models.directMessages[id] = directMessage;
  return res.send(directMessage);
});

app.delete('/direct-messages/:dmid', (req, res) => {
  const { 
    [req.params.dmid]: directMessage,
    ...otherMessages 
  } = req.context.models.directMessages;

  req.context.models.directMessages = otherMessages;
  return res.send(directMessage);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);