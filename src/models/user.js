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

    User.findByLogin = async (login) => {
        let user = await User.findOne({
            where: { username: login },
            //findByLogin is a custom method that will be employed to find a user by either their username or email
        });

        if (!user) {
            user = await User.findOne({
            where: { email: login },
            });
            //if the user is not found by username, then the method will attempt to find the user by email
        }

        return user;
    };
  
    return User;
};
  
  export default getUserModel;