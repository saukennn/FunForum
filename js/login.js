function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')
    
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    
    let msgError = document.querySelector('#msgError')
    let listaUser = []
    
    let userValid = {
      num: '',
      user: '',
      senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
      if(usuario.value == item.user && senha.value == item.senha){
         
        userValid = {
          num: item.numCad,
          user: item.user,
          senha: item.senha,
          tarefa: item.tarefa
        }
        
      }
    })
     
    if(usuario.value == userValid.user && senha.value == userValid.senha){
      
      let mathRandom = Math.random().toString(16).substr(2)
      let token = mathRandom + mathRandom
      
      localStorage.setItem('token', token)
      localStorage.setItem('userLogado', JSON.stringify(userValid))

      setTimeout (() => {
        window.location.href = 'tarefas.html'
      }, 0)

    } else {
      userLabel.setAttribute('style', 'color: red')
      usuario.setAttribute('style', 'border-color: red')
      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Usuário ou senha incorretos'
      usuario.focus()
    }
    
  }
  