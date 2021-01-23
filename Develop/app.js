const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees =[];

const memberQuest = ["Engineer","Intern","I don't want to enter another employee"];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function App(){

    setManager(); 

}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
function askTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeType",
                message: "Which type of team member would you like to add?",
                choices: memberQuest
            }
        ])
        .then(data => {
            if (data.employeeType === "Engineer") {
                setEngineer();
            }
            else if (data.employeeType === "Intern") {
                setIntern();
            }
            else {
                render();
                return;
            }
        });
}


function setManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "nameMan",
                message: "What is the team manager's name?"
            },
            {
                type: "input",
                name: "ID",
                message: "What is the team manager's id?"
            },
            {
                type: "email",
                name: "email",
                message: "What is the team manager's email?",
            },
            {
                type: "input",
                name: "officeNum",
                message: "What is the team manager's office number?"
            }
        ])
        .then(data => {
            var name = data.nameMan;
            var ID = data.ID;
            var emailMan = data.email;
            var offNum = data.officeNum;
            var manager = new Manager (name, ID, emailMan, offNum);
            employees.push(manager);
            // console.log(employees);
            askTeam();
        });
        
}



function setIntern()  {
    inquirer
    .prompt ([
        {
            type: "input",
            name: "nameInt",
            message: "What is this intern's name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is this intern's id?"
        },
        {
            type: "email",
            name: "email",
            message: "What is this intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "Where does this intern go to school?"
        }
    ])
    .then(data => {
        var name = data.nameInt;
        var intId = data.ID;
        var intEmail = data.email;
        var school = data.school;     
        var intern = new Intern(name, intId, intEmail, school);
        employees.push(intern);
        askTeam();
    });
    

}

function setEngineer () {
    inquirer
    .prompt([
        {
            type: "input",
            name: "nameEng",
            message: "What is this engineer's name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is this engineer's id?"
        },
        {
            type: "email",
            name: "email",
            message: "What is this engineers's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is this engineer's github userID?"
        }
    ])
    .then(data => {
        var name = data.nameEng;
        var engId = data.ID;
        var engEmail = data.email;
        var engGit = data.github;     
        var engg = new Engineer(name, engId, engEmail, engGit);
        employees.push(engg);
        console.log(employees);
        askTeam();
    });
    
}

App();

module.exports = App;