class Person {
    constructor(name, surname) {
        this.surname = surname;
        this.name = name;
    }

    getFullName() {
        return this.name + " " + this.surname;
    }
}





class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname)
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return this.name + " " + this.surname + " " + this.salary
    }
    getSalary() {
        console.log(this.salary);
    }
    increaseSalary() {
        return this.salary + (this.salary * 10 / 100);
    }
};








class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    };
    getSpecialization() {
        console.log(this.specialization);
    }
}



class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department

    };

    getDepartment() {
        console.log(this.department);
    };
    changeDepartment(department) {
        this.department = department;
    };
}



const Mika = new Person("Mika", "Mikic");
console.log(Mika.getFullName());

const Employee1 = new Employee("Pera", "Peric", "Programer", 1500);
console.log(Employee1.getFullName());
console.log(Employee1.getData())
console.log(Employee1.increaseSalary());

const developer1 = new Developer("Marko", "Dragic", "Programer", 1500, "Information service");
console.log(developer1.getSpecialization());
