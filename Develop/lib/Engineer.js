// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor(name, counta, emailAdd, github) {
        const nameInt = name;
        const githubUser = github;
        const email = emailAdd;
        const role = "Engineer";
        const ID = counta;

        super (nameInt, email, role, ID);
        this.github = githubUser;
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;