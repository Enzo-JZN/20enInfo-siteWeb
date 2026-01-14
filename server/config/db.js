const { Sequelize } = require('sequelize')

// Check if the DB dialect is defined in environment variables
if (!process.env.DB_DIALECT){
    console.log("File env absent:")
    process.exit(1)
}
console.log(process.env.DB_DIALECT) // Log the database dialect being used (mysql, postgres, etc.)


const myConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, // mysql ou postgres
    logging: false, // disable SQL logging in console
})

module.exports = myConnection // Export the connection for use in models
