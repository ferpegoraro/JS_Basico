// Função

function message(){
    console.log("Olá, é bom ter você aqui")
}

message()


//parametros

function parametro(name){
    console.log("Olá, " + name + "! É bom ter você aqui")
}

parametro("Fernando")
parametro("Julia")

function sum(a, b){
    console.log("O número abaixo, é o valor da conta a + b")
    return a + b
    
}

let response = sum(10, 20)
console.log(response)


showMessage("Olá, é bom ter você aqui")
function showMessage(message){
    console.log(message)
    endLine()
    function endLine(){
        console.log("--------")
    }
}

showMessage("Olá, é bom ter você aqui")


// Comntário de documentação

/**
 * Authentication user
 * @param {String} email user email
 * @param {*} password more than 6 characters
 * @returns {Number} user id
 */
function singIn(email, password){
    // fluxo de autentificação de usuário

    return 7
}

singIn("fernndopbilia23@gmail.com", "123456")


// Função Anônima

const exemplo = function(message, name){
    return message + name
}

console.log(exemplo("Olá, é bom ter você aqui ", "Fernando"))

// Arrow Function
const arrowFunction = (message, name) => {
    return message + name
}

console.log(arrowFunction("Olá, é bom ter você aqui ", "Fernando"))

// Callback function

function execute(taskName, callBack){
    console.log("Iniciando a tarefa: " + taskName)
    
    callBack()
}

function callBack(){
    console.log("Tarefa finalizada")
}

execute("Download do arquivo...", callBack)

execute("salvando  dados", () => console.log("Dados salvos"))



    
