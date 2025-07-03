window.addEventListener("load", () => {
    console.log("A pagina foi carregada")
})

addEventListener("click", (event) => {
    event.preventDefault()

    //todas as informações do evento
    console.log(event)
    console.log(event.target)

    console.log(event.target.textContent)
})
//Eventos de scroll
const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
    console.log(ul.scrollTop)

    if(ul.scrollTop > 300){
        
        ul.scrollTo({top: 0, behavior: "smooth"})
    }
}) 

//Eventos de submit
const button = document.querySelector("button")

button.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("clicou")
})

//Eventos de formularios

const form = document.querySelector("form")
form.onsubmit = (event) => {
    event.preventDefault()
    console.log("você enviou o form")
}

//Eventos de input

const input = document.querySelector("input")

//Keydown captura todas as teclas
// input.addEventListener("keydown", (event) => {
//     console.log(event.key)
// })

//Keypress ignora a tecla de espaço, ctrl, shift, alt
// input.addEventListener("keypress", (event) => {
//     console.log(event.key)
// })

input.onchange = () => {
    console.log("O input mudou")
}






