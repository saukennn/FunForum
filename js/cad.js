let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

let telefone = document.querySelector("#telefone");
let labelTelefone = document.querySelector("#labelTelefone");
let validTelefone = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmSenha = document.querySelector("#confirmSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

var form = document.querySelector("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

usuario.addEventListener("keyup", () => {
  if (usuario.value.length < 3) {
    labelUsuario.setAttribute("style", "color: red");
    labelUsuario.innerHTML = "Usuário *Insira no minimo 3 caracteres";
    usuario.setAttribute("style", "border-color: red");
    validUsuario = false;
  } else if(usuario.value.length >= 3){
    labelUsuario.setAttribute("style", "color: green");
    labelUsuario.innerHTML = "Usuário";
    usuario.setAttribute("style", "border-color: green");
    validUsuario = true;
  }
});

telefone.addEventListener("keyup", () => {
  if (telefone.value.length < 8) {
    labelTelefone.setAttribute("style", "color: red");
    labelTelefone.innerHTML = "Telefone *Insira o seu número de telefone";
    telefone.setAttribute("style", "border-color: red");
    validTelefone = false;
  } else {
    labelTelefone.setAttribute("style", "color: green");
    labelTelefone.innerHTML = "Telefone";
    telefone.setAttribute("style", "border-color: green");
    validTelefone = true;
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length < 8) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "Senha *Insira no mínimo 8 caracteres";
    senha.setAttribute("style", "border-color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = "Senha";
    senha.setAttribute("style", "border-color: green");
    validSenha = true;
  }
});

confirmSenha.addEventListener("keyup", () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute("style", "color: red");
    labelConfirmSenha.innerHTML = "Confirmar Senha *As senhas não conferem";
    confirmSenha.setAttribute("style", "border-color: red");
    validConfirmSenha = false;
  } else if (confirmSenha.value.length >=8 && senha.value == confirmSenha.value) {
    labelConfirmSenha.setAttribute("style", "color: green");
    labelConfirmSenha.innerHTML = "Confirmar Senha";
    confirmSenha.setAttribute("style", "border-color: green");
    validConfirmSenha = true;
  }
});

function validateForm() {
  if (validUsuario === true && validTelefone === true && validSenha === true && validConfirmSenha === true) {
    cadastrar();
    
  } else {
    msgError("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

function cadastrar() {
  if (validUsuario == true && validTelefone == true && validSenha == true && validConfirmSenha == true){
    let listaUser =
      (window.localStorage.getItem("listaUser") &&
        JSON.parse(window.localStorage.getItem("listaUser"))) ||
      [];

    listaUser.push({
      user: usuario.value,
      num: telefone.value,
      senha: senha.value,
    });
    console.log("salvando usuário");
    window.localStorage.setItem("listaUser", JSON.stringify(listaUser));
    console.log(validUsuario);
    console.log(validTelefone);
    console.log(validSenha);
    console.log(validConfirmSenha);

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    console.log("redirecionando...");
    setTimeout(() => {
      window.location.href = "login.html";
      console.log("redirecionado");
    }, 2000);
  }
}

