// select * from db or table

const connect = require('./connect');


class dataBase {
    constructor(connect) {
        this.connect = connect;
    };

    grabAllEmployees() {
        return this.connect.query("SELECT * FROM employee")
    };

    
}



module.exports = dataBase(connect);