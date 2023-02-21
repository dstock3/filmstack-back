import Sequelize from 'sequelize';
//import the Sequelize library

import getUserModel from './user';
import getDirectMessageModel from './direct-message';
import 'dotenv/config';

const sequelize = new Sequelize(
    //specify the database, username, and password
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
      //dialect is the type of database we are using
    },
);

const models = {
    //create a models object to hold the models
    //this will be used to create the associations between the models
    User: getUserModel(sequelize, Sequelize),
    DirectMessage: getDirectMessageModel(sequelize, Sequelize),
    
};

Object.keys(models).forEach((key) => {
    //iterate through the models object and call the associate method on each model
    if ('associate' in models[key]) {
        models[key].associate(models);
        //associate is a method that will be defined on each model
    }
});
  
export { sequelize };
export default models;


/*
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
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Hello World 2',
        userId: '2',
    },
    3: {
        id: '3',
        text: 'Hello World 3',
        userId: '3',
    },
    4: {
        id: '4',
        text: 'Hello World 4',
        userId: '4',
    }
};

export default {
    users,
    directMessages,
};
*/
