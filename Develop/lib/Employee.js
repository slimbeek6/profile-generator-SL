// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, ID, email, role) {
        this.name = name;
        this.id = ID;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        if (!this.role) {
            this.role = "Employee";
        }

        return this.role;
    }
}

module.exports = Employee;