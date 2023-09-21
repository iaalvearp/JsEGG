/**
 * Escribir un programa que calcule cuántos litros de combustible consumió un automóvil. El
usuario ingresará una cantidad de litros de combustible cargados en la estación y una
cantidad de kilómetros recorridos, después, el programa calculará el consumo (km/lt) y se
lo mostrará al usuario.
 */

let kmTraveled = parseFloat(prompt("Cuántos kilómetros recorriste?"));
let userGas = parseFloat(prompt("Cuántos litros de combustible consumió?"));
let consumption = kmTraveled / userGas;

alert(`El resultado es: ${consumption}km/lt`);
