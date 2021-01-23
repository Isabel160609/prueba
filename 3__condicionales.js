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

// ------------------------------------------------------------------------------ 
// IF/ELSE 
// Sintaxis: 
// if (condition) { // si es TRUE
//     instrucciones si se cumple
// } else {
//     instrucciones si NO se cumple
// }

// Ejemplo1: Comprobar el mayor de dos números y si son iguales
// var num1 = Number(prompt("Dime un número")); 
// var num2 = Number(prompt("Dime otro número"));

// if(num1 > num2){
//     console.log("num1 es mayor a num2");
// } else if (num2 > num1){
//     console.log("num2 es mayor a num1");
// }else{
//     console.log("son iguales");
// }

// Ejemplo2: Validación de contraseña 
// Simulación de REGISTRO
// var passUSER_REG = prompt("Registra tu contraseña (min 6 caract)"); 
// if (passUSER_REG.length < 6){
//     console.log("La contraseña tiene menos de 6 caract.");
// }else{
//     var passDB = passUSER_REG;
//     console.log("Contraseña registrada correctamente!");
//     // Simulación de LOGIN 
//     var passUSER_LOGIN = prompt("Dime tu contraseña");
//     if (passUSER_LOGIN === passDB) {
//         console.log("Login OK!!!");
//     } else {
//         console.log("Contraseña incorrecta!");
//     }
// }

// ---------------------------------------------------------------- 
// SWITCH: Siempre utilizamos SWICTH en el caso de que conocemos los valores
// a comparar
// sintaxis: 
// switch (key) {
//     case value:
//         instrucciones si se cumple
//         break; // sale del swicth

//     default:
//         break;
// }

// Ejemplo: Registro de un horario del curso  
// var horario = prompt("Elige tu horario de curso (mañana/tarde");

// switch (horario) {
//     case "mañana":
//         console.log("Has elegido horario de mañaña");
//         break;
//     case "tarde":
//         console.log("Has elegido horario de tarde");
//         break;
//     default:
//         console.log("No has añadido un horario correcto!");
//         break;
// }
