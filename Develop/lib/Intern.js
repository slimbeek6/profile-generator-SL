// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(name, counta, emailAdd, school) {
        const nameInt = name;
        const schoolInt = school;
        const email = emailAdd;
        const role = "Intern";
        const ID = counta;

        super (nameInt, email, role, ID);
        this.school = schoolInt;
    }

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;