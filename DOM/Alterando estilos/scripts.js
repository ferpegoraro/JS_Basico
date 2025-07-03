const input = document.querySelector("#name");

//Adicionar uma classe
input.classList.add("input-error");

//Remover uma classe
input.classList.remove("input-error");

//Verificar se possui uma classe
console.log(input.classList.contains("input-error"));

//Adicionar ou remover uma classe
// input.classList.toggle("input-error");

//Modificar as propriedades CSS do elemento
const button = document.querySelector("button");
button.style.backgroundColor = "red";