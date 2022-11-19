//Guardar os dados
function pegarDadosSalvarLocalStore(){
    //PEGANDO OS DADOS DOS INPUT
    const advogado = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        nascimento: document.getElementById('nascimento').value,
        logradouro: document.getElementById('logradouro').value,
        bairro: document.getElementById('bairro').value,
        sobrenome: document.getElementById('sobrenome').value,
        numeroOabS: document.getElementById('ufS').value,
        numeroOabC: document.getElementById('numeroOab').value,
        senha: document.getElementById('senha').value,
        telefone: document.getElementById('telefone').value,
        numero: document.getElementById('numero').value,
        ufS: document.getElementById('uf').value,
        complemento: document.getElementById('complemento').value,
    };
    //ENVIANDO OS DADOS PARA O LOCAL STORE
    localStorage.setItem("advogado", JSON.stringify(advogado));
}

//trazer do LocalStrore como um objeto e so mostrar para o console
obterDadosLocalStore();
function obterDadosLocalStore(){
    if(localStorage.getItem("advogado")){        
        const advogado = JSON.parse(localStorage.getItem("advogado"));
        
        console.log(advogado);
    }
    else{
        console.log("Não á nenhum dado no localStore")
    }
}

//Atualizar nova senha do advogado (TELA DE RECUPERAR SENHA) 
  function atualizarSenha(){
    const advogadoJSON = JSON.parse(localStorage.getItem('advogado'));

    const novaSenha = document.getElementById('novaSenha').value;
    const confirmaNovaSenha = document.getElementById('confirmaNovaSenha').value;

    if(!advogadoJSON){
        const mensagemErro = document.querySelector(".mensagem-de-erro-senha");
        mensagemErro.innerHTML = "Usuario não existe";
        mensagemErro.style.display = "block";
        return;
      }

    if(novaSenha === confirmaNovaSenha){
        advogadoJSON.senha = novaSenha;
        localStorage.setItem('advogado', JSON.stringify(advogadoJSON));
    }
    document.querySelector(".mensagem-de-erro-senha").style.display = "block";
}

//Atualizar cadastro do advogado (TELA DE EDIÇÃO PERFIL) 
function atualizarCadastro(){
    const advogadoJSON = JSON.parse(localStorage.getItem('advogado'));

    const advogado = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        nascimento: document.getElementById('nascimento').value,
        logradouro: document.getElementById('logradouro').value,
        bairro: document.getElementById('bairro').value,
        sobrenome: document.getElementById('sobrenome').value,
        numeroOabS: document.getElementById('ufS').value,
        numeroOabC: document.getElementById('numeroOab').value,
        senha: document.getElementById('senha').value,
        telefone: document.getElementById('telefone').value,
        numero: document.getElementById('numero').value,
        ufS: document.getElementById('uf').value,
        complemento: document.getElementById('complemento').value,
    };

        Object.keys(advogadoJSON).map(item => { 
            advogadoJSON[item] = advogado[item]
         } );
        localStorage.setItem('advogado', JSON.stringify(advogadoJSON));
} 


//Função para login
function login(){
    const advogadoJSON = JSON.parse(localStorage.getItem('advogado'));

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


  if(!advogadoJSON || !advogadoJSON.email || !advogadoJSON.senha){
    const mensagemErro = document.querySelector(".mensagem-de-erro");
    mensagemErro.innerHTML = "Usuario não existe";
    mensagemErro.style.display = "block";
    return;
  }

  if(email === advogadoJSON.email && senha === advogadoJSON.senha){
        window.location.pathname="pages/TelaPrincipal/telaprincipal.html";        
        return;
    }
    
    document.querySelector(".mensagem-de-erro").style.display = "block"; 
}
