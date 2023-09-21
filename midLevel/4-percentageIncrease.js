/**
 * Crear un programa que solicite al usuario que ingrese el precio de un producto al inicio del
año, y el precio del mismo producto al finalizar el año. El programa debe calcular cuál fue el
porcentaje de aumento que tuvo ese producto en el año y mostrarlo por pantalla.
 */

let initialYearPrice = parseFloat(prompt("Ingresa el precio de inicio de año"));
let finalYearPrice = parseFloat(prompt("Ingresa el precio de final de año"));
let totalAux = initialYearPrice + finalYearPrice;

let diferentialPercentage =
  ((finalYearPrice - initialYearPrice) / initialYearPrice) * 100;

alert(
  `El porcentaje en comparación al inicio del año es: ${diferentialPercentage}%`
);
