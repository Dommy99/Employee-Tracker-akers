const { prompt } = require("inquirer");
const cTable = require("console.table");
const logo = require("asciiart-logo");
const db = require("./db");

function initializePrompts() {
  const logoPrompt = logo({
    name: "test",
  }).render();

  console.log(logoPrompt);
  renderPrompts();
}

async function renderPrompts() {
  try {
  const { choice } = await prompt([
    {
      type: "list",
      message: "Choose from the list below",
      name: "choice",
      choices: [
        {
          name: "View employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "ADD employees",
          value: "ADD_EMPLOYEES",
        },
        {
          name: "UPDATE employees",
          value: "UPDATE_EMPLOYEES",
        },
        {
          name: "View jobs",
          value: "VIEW_JOBS",
        },
        {
          name: "Add jobs",
          value: "ADD_JOBS",
        },
        {
          name: "View departments",
          value: "VIEW_DEPO",
        },
        {
          name: "Add departments",
          value: "ADD_DEPO",
        },
        {
          name: "Finished?",
          value: "quit",
        },
      ],
    },
  ]);
  

  console.log(choice)
  switch (choice) {
    case "VIEW_EMPLOYEES":
        return viewEmployee();
    case "ADD_EMPLOYEES":
        return addEmployee();
    case "UPDATE_EMPLOYEES":
        return updateEmpJobs();
    case "VIEW_DEPO":
        return viewDepo();
    case "ADD_DEPO":
        return addDepo();
    case "VIEW_JOBS":
        return viewJobs();
    case "ADD_JOBS":
        return addJobs();
    default:
         return quit();
  }
} catch (e) {console.e}
}

// viewing 
async function viewEmployee(){
  console.log("Viewing Employee")
    const employee = await db.grabAllEmployees();

    console.table(employee);

    initializePrompts();
}

async function viewDepo(){
    const depos = await db.grabAllDepos();

    console.table(depos);
    initializePrompts();
}

async function viewJobs(){
    const jobs = await db.grabAllJobs();

    console.table(jobs);
    initializePrompts();
}

// Adding

async function addDepo(){
    const depo = await prompt([
        {
            name: "name",
            message: "Depo name?"
        }
    ]);

    await db.makeDepo(depo);

    initializePrompts();

}

async function addEmployee(){
const jobs = await db.grabAllJobs();
const employees = await db.grabAllEmployees();

const employee = await prompt ([
{
  name: "first_name",
  message: "First name of the employee?"
},
{
  name: "last_name",
  message: "Last name of the employee?"
},

]);
const jobOptions = jobs.map(({ id, title }) => ({
  name: title, 
  value: id
}));

const { roleId } = await prompt ({
  type: "list",
  name: "roleId",
  message: "What is the employee's role",
  choices: jobOptions 
});

employee.role_id = roleId;

const managerChoices = employees.map(({ id, first_name, last_name }) => ({
  name: `${first_name} ${last_name}`,
  value: id
}));
managerChoices.unshift({ name: "None", value: null});

const { managerId } = await prompt ({
  type: "list",
  name: "managerId",
  message: "Who is the employee's manager?",
  choices: managerChoices
});

employee.manager_id = managerId;

await db.createEmployee(employee);

initializePrompts();

}

async function addJobs(){
  console.log("DEPARTMENTS")
    const depo = await db.findAlldepo();
    console.log(depo);
    const depoOptions = await db.depo.map(({ id, name }) => ({
        name: name, 
        value: id
    }));

    const job = await prompt ([
        {
            name: "title",
            message: "What's your job?"
        },
        {
            name: "salary",
            message: "What's your salary?"
        },
        {
            type: "list",
            name: "depo_id",
            message: "Which depo are you in?",
            choices : depoOptions
        }
    ]);

    await db.grabJob(job);

    initializePrompts();
}

// update
async function updateEmpJobs() {
  const employees = await db.findAllEmployees();

  const employeeChoices = employees.map(({id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
  }));

  const {employeeId} = await prompt([
      {
          type: "list",
          name: "employeeId",
          message: "Which employee's role do you want to update?",
          choices: employeeChoices
      }
  ]);

  const roles = await db.findAllRoles();

  const roleChoices = roles.map(({ id, title}) => ({
      name: title, 
      value: id
  }));

  const { roleId } = await prompt ([
      {
          type: "list",
          name: "roleId",
          message: "Which role do you want to assign to the selected employee?",
          choices: roleChoices
      }
  ]);

  await db.updateEmployeeRole(employeeId, roleId);

  loadMainPrompts();
}



initializePrompts();
