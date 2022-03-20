const { prompt } = require("inquirer");
const cTable = require("console.table");
const logo = require("asciiart-logo");
// const db = require("./db");

function initializePrompts() {
  const logoPrompt = logo({
    name: "test",
  }).render();

  console.log(logoPrompt);
  renderPrompts();
}

async function renderPrompts() {
  const { choice } = await prompt([
    {
      type: "list",
      message: "Choose from the list below",
      name: "choice",
      choices: [
        {
          type: "input",
          name: "View employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          type: "input",
          name: "ADD employees",
          value: "ADD_EMPLOYEES",
        },
        {
          type: "input",
          name: "DELETE employees",
          value: "DELETE_EMPLOYEES",
        },
        {
          type: "input",
          name: "UPDATE employees",
          value: "UPDATE_EMPLOYEES",
        },
        {
            type: "input",
            name: "UPDATE manager",
            value: "UPDATE_MANAGER",
          },
        {
          type: "input",
          name: "View jobs",
          value: "VIEW_JOBS",
        },
        {
          type: "input",
          name: "Add jobs",
          value: "ADD_JOBS",
        },
        {
          type: "input",
          name: "Delete jobs",
          value: "DELETE_JOBS",
        },
        {
          type: "input",
          name: "View departments",
          value: "VIEW_DEPO",
        },
        {
          type: "input",
          name: "Add departments",
          value: "ADD_DEPO",
        },
        {
          type: "input",
          name: "Delete departments",
          value: "DELETE_DEPO",
        },
        {
          name: "Finished?",
          value: "quit",
        },
      ],
    },
  ]);

  switch (choice) {
    case "VIEW_EMPLOYEES":
        return viewEmployee();
    case "ADD_EMPLOYEES":
        return addEmployee();
    case "DELETE_EMPLOYEES":
        return deleteEmployee();
    case "UPDATE_EMPLOYEES":
        return updateEmpJobs();
    case "UPDATE_MANAGER":
        return updateEmpManager();
    case "VIEW_DEPO":
        return viewDepo();
    case "ADD_DEPO":
        return addDepo();
    case "DELETE_DEPO":
        return deleteDepo();
    case "VIEW_JOBS":
        return viewJobs();
    case "ADD_JOBS":
        return addJobs();
    case "DELETE_JOBS":
        return deletejobs();
    default:
         return quit();
  }

}

// viewing 
async function viewEmployee(){
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
    const depos = await prompt([
        {
            name: "name"
            message: "Depo name?"
        }
    ]);

}

async function addEmployee(){

}

// delete
async function deleteDepo (){

}

initializePrompts();
