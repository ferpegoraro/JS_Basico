//visualizar o conteúdo do document.
console.log(document);

//Obter o title da pagina
console.log(document.title);

//Acessar o elemento pelo id
const guest = document.getElementById("guest-1");
console.log(guest);

// Mostra as propriedades do objeto
console.dir(guest);

// acessar elementos com classe
const guestByClass = document.getElementsByClassName("guest");
console.log(guestByClass);

console.log(guestByClass.item(0));
console.log(guestByClass[1]);

//Selecionar uma lista de elementos pela tag
const guestsByTag = document.getElementsByTagName("li");
console.log(guestsByTag);

//QUERY SELECTOR
const guestByQuery = document.querySelector("#guest-1");
console.log(guestByQuery);

const guestByQueryClass = document.querySelector(".guest");
console.log(guestByQueryClass);

//QUERY SELECTOR ALL
const guestByQueryClassAll = document.querySelectorAll(".guest");
console.log(guestByQueryClassAll);






