'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Followship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Followship.belongsTo(models.User, {
        as: 'Follower',
        foreignKey: 'followerId'
      })
      Followship.belongsTo(models.User, {
        as: 'Following',
        foreignKey: 'followingId'
      })
    }
  };
  Followship.init({
    followerId: DataTypes.INTEGER,
    followingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Followship',
    tableName: 'Followships'
  })
  return Followship
}
