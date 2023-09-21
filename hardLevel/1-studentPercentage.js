/**
 * Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso
actual. Diseñar un algoritmo para este propósito. Recuerda que para calcular el porcentaje
puedes hacer una regla de 3 simple. El programa debe solicitar al usuario que ingrese la
cantidad total de niños, y la cantidad total de niñas que hay en el curso.
 */

let studentBoys = parseFloat(prompt("Cantidad de niños en el curso:"));
let studentGirls = parseFloat(prompt("Cantidad de niñas en el curso:"));
let totalStudents = studentBoys + studentGirls;

// num1 / (num1 + num2) * 100 = porcentaje

let percentageBoys = (studentBoys / totalStudents) * 100;
let percentageGirls = (studentGirls / totalStudents) * 100;

alert(
  `Total de niños: ${totalStudents} Porcentaje de niños: ${percentageBoys}% y Porcentaje de niñas: ${percentageGirls}%`
);
