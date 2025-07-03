// Expressões Regulares

const input = document.querySelector("input")
const form = document.querySelector("form")

input.addEventListener("input", (event => {
    // const value = input.value
    
    const regex = /\D+/g
    
    //Retorna o padrão encontrado na string
    // console.log(value.match(regex))
    
    // testa o padrão
    //const isValue = regex.test(value)
    // console.log(isValue)


}))

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const regex = /\D+/g
    const value = input.value.replace(regex, "x")
    console.log(value)
})