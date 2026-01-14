const { Sequelize, DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  // Define the 'subjects' model
  const subjects = sequelize.define(
    'subjects', // Model name
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      timestamps: false,
      tableName: 'subjects', // Explicit table name in the database
    }
  );

  return subjects; // Return the model so it can be imported elsewhere
};
