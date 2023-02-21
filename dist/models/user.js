"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUserModel = (sequelize, { DataTypes }) => {
    const User = sequelize.define('user', {
        //for now, the user model will have a username, email, and password
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });
    User.associate = (models) => {
        User.hasMany(models.DirectMessage, { onDelete: 'CASCADE' });
        //added CASCADE flag to delete all messages when user is deleted
    };
    User.findByLogin = (login) => __awaiter(void 0, void 0, void 0, function* () {
        let user = yield User.findOne({
            where: { username: login },
            //findByLogin is a custom method that will be employed to find a user by either their username or email
        });
        if (!user) {
            user = yield User.findOne({
                where: { email: login },
            });
            //if the user is not found by username, then the method will attempt to find the user by email
        }
        return user;
    });
    return User;
};
exports.default = getUserModel;
