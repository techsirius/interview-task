'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Employee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Employee.init({
        // id: DataTypes.BIGINT(20),
        first_name: DataTypes.STRING(255),
        last_name: DataTypes.STRING(255),
        designation: DataTypes.STRING(255),
        joining_date: DataTypes.DATE(6),
        created_at: DataTypes.DATE(6),
        updated_at: DataTypes.DATE(6),
    }, {
        sequelize,
        modelName: 'employee',
        timestamps: false,
        // tableName: 'employees'
    });
    return Employee;
};