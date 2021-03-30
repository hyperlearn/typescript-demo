class Employee {
  empId: number;
  empName: string;
  empSalary: number;

  static company: string = 'Tesla';

  constructor(id: number, name: string, salary: number) {
    this.empId = id;
    this.empName = name;
    this.empSalary = salary;
  }

  greeting(): void {
    console.log(`Hi, I am ${this.empName}`);
  }

  tellSalary(): number {
    return this.empSalary;
  }
}

let e1 = new Employee(1, 'Elon', 1000000000);
e1.greeting();
console.log(e1.tellSalary());
console.log(Employee.company);
// console.log(e1.company);
// console.log(e1.company);