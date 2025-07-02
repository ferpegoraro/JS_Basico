// Declaração de variáveis sem valor 
var user;
console.log(user);

// Declaração de variáveis com valor
var email = "fernandopbilia2304@gmail.com";
console.log(email);

// Reatribuição de variáveis
email = "fernandopbilia2304@hotmail.com";
console.log(email);

// As declarações de variaveis se alteram com letras maiuscula também
var product = "teclado mecânico";
var Product = "mouse gamer";
console.log(product);
console.log(Product);

// As declarações de variaveis não podem ser redeclaradas se usar o let
let name = "Fernando";
name = "Leonardo";
console.log(name);

// Declarando constantes. Ela não pode ser alterada
const pi = 3.1415;
const number = 10;
console.log(pi);
console.log(number);

//ESCOPO/HOISTING

{
    var age = 25;
}

console.log(age);


let adress = "Rua 1";
{
    let age = 15;
    console.log(age);
    console.log(adress);
}

//Nomes para variáveis

//camelCase
let userName = "Fernando";
console.log(userName);

//snake_case
let user_name = "Fernando";
console.log(user_name);

//PascalCase
let UserName = "Fernando";
console.log(UserName);


// String
let text = "Fernando";
console.log(text);
console.log(typeof text);

console.log('Se eu quiser usar as "aspas duplas" num texto eu coloco aspas diferentes, como esta ai no exemplo deste texto')

name = "Fernando";
email = "fernandopbilia2304@gmail.com";

console.log(name, email);

//concatenação

let message = "Olá," + name + "voce se conectou com o email" + email;
console.log(message);

//template literals
let message_2 = `Olá ${name} voce se conectou com o email ${email}`;
console.log(message_2);

//Number
let num = 10;
console.log(num);
console.log(typeof num);

//Number float
num = 10.5;
console.log(num);
console.log(typeof num);

// Boolean

console.log(true);
console.log(false);

let isLoading = true;
console.log(isLoading);
console.log(typeof isLoading);

//Null
user = null;
console.log(user);
console.log(typeof user);
console.log("O valor é " + user);

//Undefined
let user_2;
console.log(user_2);
console.log(typeof user_2);
console.log("O valor é " + user_2);

//Conversão de tipos

value = "10";
console.log(typeof Number(value));
// ou
age = 25;
console.log(typeof age.toString());











