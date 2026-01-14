const fs = require('fs') // File system module to read files from the directory
const path = require('path') // Path module to handle file paths
const myConnection = require('../config/db') // Import the Sequelize connection
const { Sequelize, DataTypes } = require('sequelize')

// Store the database connection in the db object
const db = {
    myConnection: myConnection,
}

// Current folder (where models are stored)
const folder = __dirname

// Load all model files dynamically
fs.readdirSync(folder)
    .filter((file) => file !== 'index.js' && file.endsWith('.js'))
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(myConnection)
        db[model.name] = model // Store the model in the db object under its name
        console.log(`Modèle chargé: ${model.name}`)
    })

// Handle model associations (if a model has an associate method)
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db) // Call the association function for each model
    }
})

module.exports = db // Export the db object for use elsewhere