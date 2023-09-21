/**
 * Escriba un programa que permita al usuario ingresar el valor de dos variables numéricas de
tipo entero. Posteriormente, el programa debe intercambiar los valores de ambas variables
y mostrar el resultado final por pantalla.
Por ejemplo, si el usuario ingresa los valores num1 = 9 y num2 = 3, la salida a del
programa deberá mostrar: num1 = 3 y num2 = 9
Ayuda: Para intercambiar los valores de dos variables se debe utilizar una variable auxiliar.
 */

let firstNum = parseFloat(prompt("Ingresa el primer número:"));
let SecondNum = parseFloat(prompt("Ingresa el segundo número:"));
let aux = firstNum + SecondNum;

alert(
  `Ahora el primer número es: ${aux - firstNum} y el segundo número es: ${
    aux - SecondNum
  }`
);
