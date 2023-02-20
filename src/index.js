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

let users = {
  1: {
    id: '1',
    username: 'Johnny Hopkins',
  },
  2: {
    id: '2',
    username: 'Sloan Kettering',
  }
};

let directMessages = {
  1: {
    id: 1,
    text: 'Hello World',
  },
  2: {
    id: 2,
    text: 'Hello World 2',
  },
  3: {
    id: 3,
    text: 'Hello World 3',
  },
  4: {
    id: 4,
    text: 'Hello World 4',
  }
};

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userid', (req, res) => {
  return res.send(users[req.params.userid]);
});

app.get('/direct-messages', (req, res) => {
  return res.send(Object.values(directMessages));
});

app.get('/direct-messages/:dmid', (req, res) => {
  return res.send(directMessages[req.params.dmid]);
});

app.post('/direct-messages', (req, res) => {
  const id = uuidv4();
  const directMessage = {
    id,
    text: req.body.text,
  };
  directMessages[id] = directMessage;
  return res.send(directMessage);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);