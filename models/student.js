'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.User,{foreignKey:'userId' , as :'user'})
    }
  }
  Student.init({
    gender: {
      type: DataTypes.ENUM,
      values:['male','fmale'],
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName:"students",
    modelName: 'Student',
  });
  return Student;
};