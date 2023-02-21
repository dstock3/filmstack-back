"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDirectMessageModel = (sequelize, { DataTypes }) => {
    const DirectMessage = sequelize.define('message', {
        //for now, the direct message model will have a text and a userId   
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });
    DirectMessage.associate = (models) => {
        DirectMessage.belongsTo(models.User);
    };
    return DirectMessage;
};
exports.default = getDirectMessageModel;
