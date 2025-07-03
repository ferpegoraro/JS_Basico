const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest");
const guestName = document.createElement("span");
// const guestSurname = document.createElement("span");




guestName.textContent = "Fernando ";
// guestSurname.textContent = "Pegoraro";

newGuest.append(guestName);

guests.prepend(newGuest);

const input = document.querySelector("input");

//Desabilitar o input
// input.setAttribute("disabled", true);
input.setAttribute("type", "file")
input.removeAttribute("type")
