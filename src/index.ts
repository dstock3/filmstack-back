import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models, { sequelize } from './models';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(async (req, res, next) => {
  //define context for each request here and pass it to the resolvers
  const users = await models.User.findAll();
  const me = users[1] || null;

  req.context = {
    models,
    me,
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/direct-messages', routes.directMessages);

app.get('/', (req, res) => {
  res.send('root get request');
});

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});