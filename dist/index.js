"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("./models"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    req.context = {
        models: models_1.default,
        me: models_1.default.users[1],
    };
    next();
});
app.use('/session', routes_1.default.session);
app.use('/users', routes_1.default.user);
app.use('/direct-messages', routes_1.default.directMessages);
app.get('/', (req, res) => {
    console.log(models_1.default);
    res.send('root get request');
});
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));
