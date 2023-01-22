// Solicitar al usuario que ingrese un valor
let num1 = prompt("Ingresa un número:");
let num2 = prompt("Ingresa otro número:");

// Comparar las entradas
if (num1 > num2) {
  alert(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
   alert(num1 + " es menor que " + num2);
} else {
   alert(num1 + " es igual a " + num2);
}