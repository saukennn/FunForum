//dados do usuario
let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

//logado.innerHTML = `Olá ${userLogado.user}`

// if(localStorage.getItem('token') == null){
//     window.location.href = "index.html";
// }

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    localStorage.removeItem('todoList')
    window.location.href = "index.html";
}

//mostrar usuario no cabeçalho

console.log(userLogado)

var cabecalho = document.getElementById("navbar-items")
console.log(cabecalho)

if(!userLogado) {
    console.log("usuario nao logado")
} else {
    console.log("entrou")
    document.getElementById("navbar-items").innerHTML = `
        <li><a href="index.html">Início</a></li>  
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="contato.html">Contato</a></li>
        <li><a href="desempenho.html">Desempenho</a></li>
        <li><a href="tarefas.html">Tarefas</a></li>
        <li><a href="index.html" onclick ='sair()'>Sair</a></li>
    `
}