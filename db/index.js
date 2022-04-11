// select * from db or table

const connect = require('./connect');

console.log(connect.query)


class DataBase {
    constructor(connect) {
        this.connect = connect;
        // this.query = util.promisify(connect.query);
    };

    grabAllEmployees() {
        console.log('help me')
        return this.connect.query("SELECT * FROM employees")
    };

    findAllPossibleManagers(employeeId) {
        return this.connect.query("SELECT id, first_name, last_name FROM employee WHERE id = ?", employeeId);
    }


    createEmployee(employee) {
        return this.connect.query("INSERT INTO employees SET ?", employee);
    }

    updateEmpJobs(employeeId, jobId) {
        return this.connect.query(
            "UPDATE employees SET role_id = ? WHERE id =?",
            [jobId, employeeId]
        );
    }


    grabAllJobs() {
        return this.connect.query(
       'SELECT * FROM roles'
            );
    }

    makeJob(job) {
        return this.connect.query("INSERT INTO roles SET ?", job);
    }

    findAlldepo() {
        return this.connect.query(
        'SELECT * FROM department'
            );
    }

    makeDepo(depo) {
        return this.connect.query("INSERT INTO department SET ?", depo);
    }

    
}



module.exports = new DataBase(connect);