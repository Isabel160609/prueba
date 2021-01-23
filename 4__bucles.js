// COMPARACIONES
// OPERADOR    DESCRIPCIÓN
// ==          Igual a... 
// ===         Igual a... y mismo tipo de dato 
// !=          Diferente a... 
// >           Mayor a... 
// <           Menor a... 
// >=          Mayor ó igual a...
// <=          Menor ó igual a... 

// CONCATENACIÓN DE COMPARACIONES
// OPERADOR    DESCRIPCIÓN
// &&              AND: Devuelve un TRUE si TODAS las comparaciones se cumplen 
// ||              OR: Devuelve un TRUE si ALGUNA de las comparaciones se cumplen
// !               NOT: Invierte el estado Booleano 

// --------------------------------------------------------------------- 
// WHILE 
// sintaxis:
// while (condition) { 
//     instrucciones q se ejecutan en bucle
// } 
// Ejemplo: imprimir los números del 1 al 5
// SIN BUCLE:
// console.log(1);
// console.log(2);
// . 
// .
// console.log(5);

var i = 1; // INICIALIZO
while (i <= 5) { // COMPARO
    console.log(i);
    i++; //ACTUALIZO
}

// ------------------------------------------------ 
// DO-WHILE: Primero ejecuta y luego compara (al revés que el WHILE)
// sintaxis: 
// do {
//     instrucciones q se ejecutan en bucle
// } while (condition);

// Ejemplo: Pregunta un contraseña hasta que sea correcta y valida si el usuario no introduce dato
// var passDB = "a1234a";

// do {
//     var passUSER = prompt("Dime tu contraseña");
//     if(passUSER == ""){ // si el campo esta vacío
//         alert("Introduce una contraseña!")
//     }
// } while (passDB != passUSER);

// ------------------------------------------------  
console.log("------------------------------------------------  ");
// FOR 
// sintaxis:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// Ejemplo1: imprimir los números del 1 al 5
for(var i = 1; i <= 5; i++){
    console.log(i);
}

// Ejemplo2: Recorrer un array  
var leng_prog = ["JS","PHP","SQL","Python","C++","R"];
// La lectura de una posición concreta:
var sql = leng_prog[2];
console.log(sql);
// La propiedad "length" me devuelve la cantidad de elementos
var cant = leng_prog.length;
console.log(cant);

for (let i = 0; i < leng_prog.length; i++) {
    console.log(leng_prog[i]);
}

// Ejemplo3: Recorrer un array y comprobar dato (simulación LOGIN)
var usersDB = ["armand@gmail.com","1111"];

var userEMAIL = prompt("Introduce tu email");
var userPASS = prompt("Introduce tu contraseña");
var flagEmail = false;
var flagPass = false;

for (let i = 0; i < usersDB.length; i++) {
    if (userEMAIL == usersDB[0] ){
        flagEmail = true
    }
    if (userEMAIL == usersDB[1]) {
        flagPass = true
    }
}

// COMPROBACIÓN 
if (flagEmail && flagPass){
    console.log("Login OK!!!");
}else{
    console.log("Datos incorrectos!");
}


