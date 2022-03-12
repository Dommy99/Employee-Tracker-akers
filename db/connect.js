// const connect = mysql.
const mysql = require('mysql2');

  require('dotenv').config()

const connect = mysql.createConnect(
    {
    host: process.env.DB_HOST,
    
    user: process.env.DB_USER,
    
    password: process.env.DB_PASS, 
    database: 'tracker' 
    },
    console.log('Connected to the Office Tracker database.')
);
// look up promisify 

module.exports = connect