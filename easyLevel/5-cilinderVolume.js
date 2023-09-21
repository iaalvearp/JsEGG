/**
 * Escribir un programa que calcule el volumen de un cilindro. Para ello se deberá solicitar al
usuario que ingrese el radio y la altura. Mostrar el resultado por pantalla.
volumen = π * radio2 * altura
 */

const PI = Math.PI.toPrecision(3);
let radioUser = parseFloat(prompt("Ingresa el radio de la circunferencia"));
let userHigh = parseFloat(prompt("Ingresa la altura de la circunferencia"));

let volume = PI * radioUser * userHigh;

alert(`El volumen del cilindro es: ${volume}`);
