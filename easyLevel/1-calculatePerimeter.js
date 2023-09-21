/**
 * Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio de
una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que para
calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio 2
perimetro = 2 * PI * radio
 * 
 */

const PI = Math.PI.toPrecision(3);
let radio = parseFloat(
  prompt("Ingresa el valor del radio de la circunferencia")
);

const area = PI * radio ** 2;
const perimeter = 2 * PI * radio;

alert(`Si el radio es: ${radio} el area es: ${area}
    y el perímetro es: ${perimeter}`);
