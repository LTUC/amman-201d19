'use strict';

// console.log('test the js');

// global array
let theEmployee = [];
// constructor
function Employee(userName, userSalary, position, experience) {
    // this.userName = userName;
    this.name = userName;
    // this.userSalary = userSalary;
    this.salary = userSalary;
    this.position = position;
    this.experience = experience;
    // console.log(this);
    theEmployee.push(this);
}

Employee.prototype.work = function() {
    console.log(this.name + ' working ... and the salary is ' + this.salary)
}

let laith = new Employee('Laith', 700, 'j.software engineer', 1);
// console.log(laith);

// console.log(laith.work());
// Employee.work();

let rula = new Employee('Rula', 1500, 'Senior Engineer', 6);
rula.work();
// console.log(rula);

let qusay = new Employee('Qusay', 1500, 'Senior Engineer', 6);

let osama = new Employee('Osama', 1500, 'Senior Engineer', 6);

let ibrahim = new Employee('Ibrahim', 7500, 'CEO', 100000);

let workers = [laith, rula];
// console.log('manul added', workers);

console.log('from the constructor', theEmployee);
// console.log(qusay.name);

// theEmployee[0]
// for (let i = 0; i < theEmployee.length; i++) {
//     console.log(theEmployee[i]);
//     console.log(theEmployee[i].name, theEmployee[i].salary);
//     // console.log(theEmployee[i].salary);

// }

// Creating the table of employee

let parent = document.getElementById('parent');
console.log(parent);

let employeeTable = document.createElement('table');
parent.appendChild(employeeTable);

let headerEl = document.createElement('tr');
employeeTable.appendChild(headerEl);

let th1 = document.createElement('th');
headerEl.append(th1);
th1.textContent = 'Name';

let th2 = document.createElement('th');
headerEl.append(th2);
th2.textContent = 'Salary';

let th3 = document.createElement('th');
headerEl.append(th3);
th3.textContent = 'Experience';

for (let i = 0; i < theEmployee.length; i++) {
    // console.log(theEmployee[i]);
    let dataRow = document.createElement('tr');
    employeeTable.appendChild(dataRow);

    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent = theEmployee[i].name;

    let td2 = document.createElement('td');
    dataRow.appendChild(td2);
    td2.textContent = theEmployee[i].salary;

    let td3 = document.createElement('td');
    dataRow.appendChild(td3);
    td3.textContent = theEmployee[i].experience;



    // for (let j = 0; j < 2; j++) {
    //     let td1 = document.createElement('td');
    //     dataRow.appendChild(td1);
    //     if (j == 0) {
    //         td1.textContent = theEmployee[i].name;

    //     } else {
    //         td1.textContent = theEmployee[i].salary;

    //     }

    // }
}