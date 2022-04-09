// const connect = mysql.
const mysql = require('mysql2');
const {promisify} = require('util');


  require('dotenv').config()

const connect = mysql.createConnection(
    {
    host: process.env.DB_HOST,
    
    user: process.env.DB_USER,
    
    password: process.env.DB_PASS, 
    database: 'tracker' 
    },
    console.log('Connected to the Office Tracker database.')
);
// look up promisify 

connect.connect(err => {
  if (err) {console.log(err)}
});

connect.query = promisify(connect.query);

module.exports = connect