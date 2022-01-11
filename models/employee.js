'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Employee.hasOne(User);
      Employee.belongsTo(models.User)
      Employee.hasMany(models.Requests)
    }
  };
  Employee.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    holiday: {
      type: DataTypes.INTEGER,
      defaultValue: 21
    }
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};