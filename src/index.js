import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('root get request');
});

let directMessages = {

};

let users = {

};

app.get('/direct-messages'), (req, res) => {
  return res.send(Object.values(directMessages));
};

app.post('/direct-messages', (req, res) => {
  
  /*
  const id = uuidv4();
  const directMessage = {
    id,
    text: req.body.text,
  };
  directMessages[id] = directMessage;
  return res.send(directMessage);
  */
});

app.get('direct-messages/:dmid', (req, res) => {
  return res.sendStatus(directMessages[req.params.dmid]);
  
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);