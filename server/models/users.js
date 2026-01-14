const { Sequelize, DataTypes } = require('sequelize')

module.exports = function (sequelize) {
    // Define the 'users' model
    let users = sequelize.define(
        'users', // Model name
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            occupation: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false
        }
    )
    return users // Return the model for use elsewhere
}
