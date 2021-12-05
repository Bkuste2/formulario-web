let cadastros = []
localStorage.setItem('Users', JSON.stringify(cadastros))

let nomeCadastro = document.getElementById('nomeCadastro')
let sobrenomeCadastro = document.getElementById('sobrenomeCadastro')
let emailCadastro = document.getElementById('emailCadastro')
let senhaCadastro = document.getElementById('senhaCadastro')

function cadastro(){
    let Users = JSON.parse(localStorage.getItem('Users'))

    let cadastro = []

    Cadastro = {
        nome: nomeCadastro.value,
        sobrenome: sobrenomeCadastro.value,
        email: emailCadastro.value,
        senha: senhaCadastro.value  
    }

    Users.push(Cadastro)
    
    Users.push(cadastro)
    localStorage.setItem('Users', JSON.stringify(Users))

    login()
}

function login(){   

    $('.flex').css({"display":"block"})
    $('.none').css({"display":"none"})
    // $('#logar').css({"display":"none"})
    $('rt').text('Não tem conta?')

    document.getElementById('nome').innerHTML = 'Login'
    document.getElementById('cadastro').innerHTML = 'Logue para acessar todos os serviços'
}   


function cadastrar(){
    $('.flex').css({"display":"none"})
    $('.none').css({"display":"block"})
    // $('#logar').css({"display":"flex"})
    $('rt').text('Não tem conta?')

    document.getElementById('nome').innerHTML = 'Cadastro'
    document.getElementById('cadastro').innerHTML = 'Cadastre para acessar todos os serviços'
}

function logar(){
    let cadastro = JSON.parse(localStorage.getItem('Users'))
    let email = document.getElementById('emailLogin').value
    let senha = document.getElementById('senhaLogin').value

    cadastro.forEach(element => {
        if(email == element.email && senha == element.senha){
            window.location.href = 'index.html' 
        }
    });
    

}