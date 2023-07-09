'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alertService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  alertService.init({
    alertMessage: DataTypes.STRING,
    serviceIdentifier: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'alertService',
  });
  return alertService;
};