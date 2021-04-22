'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    User.init({
        // id: DataTypes.BIGINT(20),
        name: DataTypes.STRING(255),
        username: DataTypes.STRING(255),
        password: DataTypes.STRING(255),
        email: DataTypes.STRING(255),
        created_at: DataTypes.DATE(6),
        updated_at: DataTypes.DATE(6),
    }, {
        sequelize,
        modelName: 'user',
        timestamps: false,
        // tableName: 'users'
    });
    return User;
};