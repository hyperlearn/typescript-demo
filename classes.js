var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    Employee.prototype.greeting = function () {
        console.log("Hi, I am " + this.empName);
    };
    Employee.company = 'Tesla';
    return Employee;
}());
var e1 = new Employee(1, 'Elon', 1000000000);
e1.greeting();
