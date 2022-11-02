pegarDadosSalvarLocalStore();
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
//<button onclick="obterDadosLocalStore()">Mostrar</button>
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
function atualizarDados(){
    const advogado = {
        senha: document.getElementById('novaSenha').value,
}

//inserindo a nova senha
localStorage.setItem('advogado', 'senha');
}

//Função para apagar o advogado
/*function excluirAdvogado(){
    localStorage.removeItem('advogado');
}*/


function logarNaConta(){
    const emailLocalStorage = localStorage.getItem('advogado',email);
    const senhaLocalStorage = localStorage.getItem('advogado',senha);

    if(email === emailLocalStorage || senha === senhaLocalStorage){

    }
    else{

    }

}


