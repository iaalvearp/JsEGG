/**
 * A partir de una conocida cantidad de días que el usuario ingresa a través del teclado,
escriba un programa para convertir los días en horas, en minutos y en segundos. Por
ejemplo
1 día = 24 horas = 1440 minutos = 86400 segundos
 */

let userDays = parseInt(prompt("Ingresa la cantidad de días a convertir:"));
let hours = userDays * 24;
let minutes = userDays * 1440;
let seconds = userDays * 86400;

alert(`${userDays} días equivalen a:
            ${hours} horas o
            ${minutes} minutos o
            ${seconds} segundos`);
