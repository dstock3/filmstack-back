"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
//import the Sequelize library
const user_1 = __importDefault(require("./user"));
const direct_message_1 = __importDefault(require("./direct-message"));
require("dotenv/config");
const sequelize = new sequelize_1.default(
//specify the database, username, and password
process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: 'postgres',
    //dialect is the type of database we are using
});
exports.sequelize = sequelize;
const models = {
    //create a models object to hold the models
    //this will be used to create the associations between the models
    User: (0, user_1.default)(sequelize, sequelize_1.default),
    DirectMessage: (0, direct_message_1.default)(sequelize, sequelize_1.default),
};
Object.keys(models).forEach((key) => {
    //iterate through the models object and call the associate method on each model
    if ('associate' in models[key]) {
        models[key].associate(models);
        //associate is a method that will be defined on each model
    }
});
exports.default = models;
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
