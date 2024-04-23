/* ------------------------------ TASK 5 -----------------------------------
Turimas "students" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "filterTopStudents" - priima masyvą "students" ir grąžina naują masyvą,
   kuriame yra tik tie mokiniai, kurie turi vidurkį virš 9.
2. funkcija "filterGraduated" - priima masyvą "students" ir grąžina naują masyvą,
   kuriame yra tik tie mokiniai, kurie jau baigė mokyklą (graduated: true).
-------------------------------------------------------------------------- */

const students = [
  { id: "1", name: "Alice Johnson", averageGrade: 8.5, graduated: false },
  { id: "2", name: "Bob Smith", averageGrade: 9.2, graduated: true },
  { id: "3", name: "Charlie Brown", averageGrade: 8.8, graduated: false },
  { id: "4", name: "David Davis", averageGrade: 9.7, graduated: true },
  { id: "5", name: "Eve Williams", averageGrade: 7.9, graduated: false },
  { id: "6", name: "Frank White", averageGrade: 9.9, graduated: true },
  { id: "7", name: "Grace Lee", averageGrade: 8.2, graduated: false },
  { id: "8", name: "Henry Wilson", averageGrade: 9.5, graduated: true },
  { id: "9", name: "Isabella Martinez", averageGrade: 8.6, graduated: false },
];

function filterTopStudents(students) {
  const topStudents = students.filter((x) => x.averageGrade >= 9);
  return topStudents;
}
console.log(filterTopStudents(students));

function filterGraduated(students) {
  const graduatedStudents = students.filter((x) => x.graduated == true);
  return graduatedStudents;
}
console.log(filterGraduated(students));
