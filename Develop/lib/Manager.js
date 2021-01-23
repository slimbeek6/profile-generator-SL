// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor(name, counta, emailAdd, officeNumber) {
        const nameInt = name;
        const offNum = officeNumber;
        const email = emailAdd;
        const role = "Manager";
        const ID = counta;

        super (nameInt, ID, email, role);
        this.officeNumber = offNum;
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;