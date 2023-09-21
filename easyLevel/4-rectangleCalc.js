/**
 * Solicitar al usuario que ingrese la base y altura de un rectángulo, y calcular y mostrar por
pantalla el área y perímetro del mismo
area = base * altura
perimetro = 2 * altura + 2 * base.
 */

let userBase = parseFloat(prompt("Ingresa la base del rectángulo:"));
let userHigh = parseFloat(prompt("Ingresa la altura del rectángulo:"));

let area = userBase * userHigh;
let perimeter = 2 * userHigh + 2 * userBase;

alert(`El área del rectángulo es: ${area} y el perímetro es: ${perimeter}`);
