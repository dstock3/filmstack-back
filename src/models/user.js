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
  
    User.findByLogin = async (login) => {
        let user = await User.findOne({
            where: { login },
        });
  
        return user;
    };
  
    return User;
};
  
export default getUserModel;
  