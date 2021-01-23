// Tipo de variables 
// Numéricas 
var x = 5;
var y = 2.5;
// Texto ó STRING 
var saludo = "Hola";
var despedido = 'Adiós';
// Boolean 
var verdadero = true;
var falso = false;
// Array 
var coches = ['Seat', "BWM", "Ford", "Fiat"];
// Otra manera: creando un Objeto de la clase predefinida de JS: Array 
// var coches = new Array('Seat', "BWM", "Ford", "Fiat");
// Con la propiedad "length" puedo conocer la longitud (cantidad de elementos) del Array
var cantidad_coches = coches.length; // almaceno en "cantidad_coches" un 4
// Para acceder a un determinado elemento del Array, puedo seleccionarlo con su posición, empezando por 0
var Ford = coches[2]; // Ford

// -------------------------------------------------------------------------
// Diferencias entre VAR / LET / CONST
// var: variable definida (puedo acceder a ella) en cualquier punto del documento JS
var z = 5;
// alert(z);
// puedo acceder a ella:
z = 6; 
// alert(z); // popup que permite mostrar información por el navegador

// const: define un valor constante. No podremos variar su valor inicial
const c = 10;
// alert(c);
// c = 11; // error
// alert(c);

// let: variable que se accede SÓLO en el bloque en el cual está definida
if(true) { // al añadir un "true" estoy forzando que entre dentro de la llaves
    let i = 1;
    // alert(i); // ok
}
// alert(i); // error

// ---------------------------------------------------------------

// TIPOS DE OPERADORES
// +   :   Suma 
// -   :   Resta 
// *   :   Multiplicación 
// /   :   División 
// %   :   Resto 
// ++  :   incremento en una unidad
// --  :   decremento en una unidad

var num1 = 10;
var num2 = 20;

var suma = num1 + num2;
var resta = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var resto = num1 % num2;
