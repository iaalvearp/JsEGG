/**
 * A partir de una conocida cantidad de metros que el usuario ingresa a través del teclado se
debe obtener su equivalente en centímetros, en milímetros y en pulgadas.

Ayuda: 1 pulgada equivale a 2.54 centímetros.
 * 
 */

let userMeasure = parseFloat(
  prompt("Ingrese la medida en metros para convertir:")
);

let centimeters = userMeasure * 100;
let milimeters = centimeters * 10;
let inch = centimeters / 2.54;

alert(
  `La medida ${userMeasure}m son: ${centimeters}cm, ${milimeters}mm y ${inch} pulgadas`
);
