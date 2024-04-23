/* ------------------------------ TASK 10 -----------------------------------
Turimas "employees" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getTotalSalary" - priima masyvą "employees" ir grąžina visų darbuotojų algų sumą kaip skaičių.
2. funkcija "getJuniorEmployees" - priima masyvą "employees" ir grąžina naują masyvą, kuriame yra tik darbuotojai, kurie yra jaunesni nei 30 metai.
-------------------------------------------------------------------------- */

const employees = [
  { id: "1", name: "John Doe", age: 25, salary: 45000 },
  { id: "2", name: "Alice Johnson", age: 30, salary: 55000 },
  { id: "3", name: "Bob Smith", age: 28, salary: 50000 },
  { id: "4", name: "Charlie Brown", age: 35, salary: 60000 },
  { id: "5", name: "David Davis", age: 22, salary: 40000 },
  { id: "6", name: "Eve Williams", age: 29, salary: 52000 },
  { id: "7", name: "Frank White", age: 26, salary: 48000 },
  { id: "8", name: "Grace Lee", age: 32, salary: 58000 },
  { id: "9", name: "Henry Wilson", age: 27, salary: 51000 },
];

function getTotalSalary(employees) {
  let sum = 0;

  employees.forEach((employee) => {
    sum += employee.salary;
  });
  return sum;
}
console.log(getTotalSalary(employees));

function getJuniorEmployees(employees) {
  const juniors = employees.filter((x) => x.age < 30);
  return juniors;
}
console.log(getJuniorEmployees(employees));
