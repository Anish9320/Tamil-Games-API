// My sql connection 
//import file
require("dotenv").config()
const mysql = require("mysql2")
const fs = require("fs")
//variable

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    ssl:{
        rejectUnauthorized:false,
        ca: process.env.CA_PATH
    }
})

module.exports = { connection }