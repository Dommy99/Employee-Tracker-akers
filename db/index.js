// select * from db or table

const connect = require('./connect');
const util = require('util');
// const fs = require('fs');
console.log(connect.query)


class DataBase {
    constructor(connect) {
        this.connect = connect;
        // this.query = util.promisify(connect.query);
    };

    grabAllEmployees() {
        console.log('help me')
        // console.log(this.query("SELECT * FROM employees"))
        return this.query("SELECT * FROM employees")
    };

    findAllPossibleManagers(employeeId) {
        return this.query("SELECT id, first_name, last_name FROM employee WHERE id = ?", employeeId);
    }


    createEmployee(employee) {
        return this.query("INSERT INTO employee SET ?", employee);
    }

    updateEmpJobs(employeeId, roleId) {
        return this.query(
            "UPDATE employee SET role_id = ? WHERE id =?",
            [roleId, employeeId]
        );
    }


    grabAllJobs() {
        return this.query(
       'SELECT * FROM role'
            );
    }

    createRole(role) {
        return this.query("INSERT INTO role SET ?", role);
    }

    findAllDepartments() {
        return this.query(
        'SELECT * FROM department'
            );
    }

    createDepartment(department) {
        return this.query("INSERT INTO department SET ?", department);
    }

    
}



module.exports = new DataBase(connect);