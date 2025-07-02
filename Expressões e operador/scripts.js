// Operadores aritméticos
console.log("Soma: " , 2 + 2);
console.log("Subtração: " , 2 - 2);
console.log("Multiplicação: " , 2 * 2);
console.log("Divisão: " , 2 / 2);
console.log("Resto da divisão: " , 2 % 2);
console.log("Exponenciação: " , 2 ** 2);

// Operadores de incremento e decremento

let number = 10;

number = number + 1;
console.log(number);
// Ou 
number++;
console.log(number);

console.log(++number);
console.log(--number);

number += 10;
console.log(number);

// Ordem de precedência

console.log(2 + 2 * 2);
console.log((2 + 2) * 2);
console.log(2 + (2 * 2));

let media = (9 + 3 + 5 + 7) / 4;
console.log("A média do aluno Fernando é: ", media);

// Operadores lógicos
let one = 1;
let two = 2;

console.log(one == two);
console.log(one != two);
console.log(one == 1);

// Estritamente igual a

console.log(one === 1);
console.log(one === "1");

// Estritamente diferente de

console.log(one !== 2);
console.log(one !== "1");

// Maior que

console.log(one > two);
console.log(one < two);

// Maior ou igual a
console.log(one >= two);
console.log(one <= two);

// Igualdade
console.log(one == two);
console.log(one == 1);

// Operadores de atribuição
let x = 10;
let y = 5;

x += y;
console.log(x);

x -= y;
console.log(x);

x *= y;
console.log(x);

x /= y;
console.log(x);

x %= y;
console.log(x);

// Operadores de igualdade
let email = true
let password = false

console.log(email && password)

console.log(email || password)

console.log(!email)






