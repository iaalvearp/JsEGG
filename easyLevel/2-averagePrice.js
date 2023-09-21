/**
 * Escribir un programa que calcule el precio promedio de un producto. El precio promedio se
debe calcular a partir del precio del mismo producto en tres establecimientos distintos.
 * 
 */

let price1 = parseFloat(prompt("Ingrese primer precio:"));
let price2 = parseFloat(prompt("Ingrese segundo precio:"));
let price3 = parseFloat(prompt("Ingrese tercer precio:"));

const average = (price1 + price2 + price3) / 3;

alert(`El precio promedio es: ${average.toPrecision()}`);
