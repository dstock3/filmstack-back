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
        handle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        login: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        description: {
            type: DataTypes.STRING,
        },
        theme: {
            type: DataTypes.STRING,
        },
        metadataIsAllowed: {
            type: DataTypes.BOOLEAN,
        },
        emailNotifications: {
            type: DataTypes.BOOLEAN,
        },
        searchData: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        friends: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
    });
    User.associate = (models) => {
        User.hasMany(models.DirectMessage, { onDelete: 'CASCADE' });
        //added CASCADE flag to delete all messages when user is deleted
    };
    User.findByLogin = (login) => __awaiter(void 0, void 0, void 0, function* () {
        let user = yield User.findOne({
            where: { login },
        });
        return user;
    });
    return User;
};
exports.default = getUserModel;
