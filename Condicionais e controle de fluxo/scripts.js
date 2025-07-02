// operador ternario
let age = 16
console.log(age >= 18 ? "pode dirigir" : "nao pode dirigir.")

// Falsy
console.log(false ? "verdadeiro" : "falso")
console.log(0 ? "verdadeiro" : "falso")
console.log("" ? "verdadeiro" : "falso")
console.log(null ? "verdadeiro" : "falso")
console.log(undefined ? "verdadeiro" : "falso")
console.log(NaN ? "verdadeiro" : "falso")

// Truthy
console.log(true ? "verdadeiro" : "falso")
console.log(1 ? "verdadeiro" : "falso")
console.log({} ? "verdadeiro" : "falso")
console.log([] ? "verdadeiro" : "falso")
console.log("Texto" ? "verdadeiro" : "falso")
console.log(123 ? "verdadeiro" : "falso")
console.log(123.45 ? "verdadeiro" : "falso")
console.log(-123.45 ? "verdadeiro" : "falso")

// If

let hour = 11

if (hour <= 12){
    console.log("Boa dia!")
}

hour = 18

if (hour >= 12){
    console.log("Boa tarde!")
}

hour = 22

if (hour >= 12){
    console.log("Boa noite!")
}

// if && else

age = 16;

if(age >= 18){
    console.log("Pode dirigir")
}else{
    console.log("Nao pode dirigir")
}

// if && else if

hour = 14

if(hour <= 12){
    console.log("Boa dia!")
}else if(hour >= 18){
    console.log("Boa noite!")
}else{
    console.log("Boa tarde!")
}

// Switch

let day = 27

switch (day){
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terca")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sabado")
        break
    default:
        console.log("Dia invalido")
}

// Tratamento de exceções

let result = 0
try {
    if (result === 0){
        throw new Error("O valor é zero, e isso é um problema!")
    }
}catch (error){
    console.log(error)
}finally{
    console.log("Fim")
}




