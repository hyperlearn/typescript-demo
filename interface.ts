interface Employee {
	firstName: string;
  middleName?: string;
  lastName: string;
  readonly age: number;
  salary: number;
}

let emp1: Employee = {
	firstName: "Chandler",
  lastName: "Bing",
  age: 25,
  salary: 25000
}

console.log(`Hi!, I am ${emp1.firstName} ${emp1.lastName}`);

// emp1.age = 26;

emp1.salary = 30000;
console.log(`Yay!! I got an increment`, emp1.salary);

emp1.middleName = "Muriel"
console.log("Pls don't tell anyone!", emp1.middleName);


let empArray: Employee[] = [];

empArray.push(emp1);

// empArray.push({firstName: "Monica"})