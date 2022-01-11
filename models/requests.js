'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Requests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Requests.hasMany(models.Approval, {
        foreignKey: 'RequestId',
        allowNull: false
      })
      Requests.belongsTo(models.Employee)
    }
  };
  Requests.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    dateOfRequest: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date()
    },
    dateFrom: DataTypes.DATEONLY,
    dateTo: DataTypes.DATEONLY,
    days: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Requests',
  });
  return Requests;
};