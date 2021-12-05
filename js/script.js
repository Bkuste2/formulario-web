$('#button').click(function(){
    $('#nav').css({"height":"auto !important"})
});

let indexMaster = 0

const slidesMaster = document.querySelector(".slider").children;
            
const indicatorMaster = document.querySelector(".indicatorMaster");

const prevMaster = document.querySelector(".prevMaster");

const nextMaster = document.querySelector(".nextMaster");


prevMaster.addEventListener("click", function() {

    prevSlideMaster();
    updateCircleIndicatorMaster();
    resetTimerMaster();

})


nextMaster.addEventListener("click", function() {

    nextSlideMaster();
    updateCircleIndicatorMaster();
    resetTimerMaster();

})


function circleIndicatorMaster() {
    for (let i = 0; i < slidesMaster.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1
        div.setAttribute("onclick", "indicateSlideMaster(this)")
        div.id = i
        if (i == 0) {
            div.className = "active"
        }
        indicatorMaster.appendChild(div)
    }
}

circleIndicatorMaster()

function indicateSlideMaster(element) {
    indexMaster = element.id;
    changeSlideMaster();
    updateCircleIndicatorMaster();
    resetTimerMaster();
}

function updateCircleIndicatorMaster() {
    for (let i = 0; i < indicatorMaster.children.length; i++) {
        indicatorMaster.children[i].classList.remove("active")
    }
    indicatorMaster.children[indexMaster].classList.add("active")
}

function prevSlideMaster() {
    if (indexMaster == 0) {
        indexMaster = slidesMaster.length - 1;
    } else {
        indexMaster--
    }
    changeSlideMaster()
}

function nextSlideMaster() {
    if (indexMaster == slidesMaster.length - 1) {
        indexMaster = 0;
    } else {
        indexMaster++
    }

    
    changeSlideMaster();
}

function changeSlideMaster() {
    for (let i = 0; i < slidesMaster.length; i++) {
        slidesMaster[i].classList.remove("active")
    }
    slidesMaster[indexMaster].classList.add("active")
}

function resetTimerMaster() {
    clearInterval(timerMaster);
    timerMaster = setInterval(autoPlayMaster, 7000)
}

function autoPlayMaster() {
    nextSlideMaster();
    updateCircleIndicatorMaster();
}


let timerMaster = setInterval(autoPlayMaster, 7000)

let buttons = document.querySelectorAll('#container button')
let containers = document.querySelectorAll('#container .col')

console.log(document.getElementById('dataFinal'));

console.log(buttons);

for (let index = 0; index < buttons.length; index++) {
    let cadastro = JSON.parse(localStorage.getItem('Users'))
    console.log(cadastro);
    $(buttons[index]).click(function(){
        if(cadastro === null){
            alert('Você necessita realizar um cadastro para realizar a compra. \nSe já tive conta apenas logue!')
            window.open('login.html', "_self")
        }
        else{
            let ida = containers[index].querySelector('.IDA').innerHTML
            let volta = containers[index].querySelector('.VOLTA').innerHTML
            let embarque = containers[index].querySelector('.Embarque').innerHTML
            let desembarque = containers[index].querySelector('.Desembarque').innerHTML
            let horario = embarque + '-' + desembarque
            document.getElementById('nome').value = cadastro[0].nome
            document.getElementById('sobrenome').value = cadastro[0].sobrenome
            document.getElementById('email').value = cadastro[0].email
            console.log(document.getElementById('dataFinal'));
            
            document.getElementById('dataInicial').value = ida
            document.getElementById('dataInicial2').value = volta
            document.getElementById('horario').value = horario
        }


        console.log(document.getElementById('dataFinal'));
    })    
}

$(document).ready(function ($) {
    const $formulario = $("#formulario");

    $formulario.submit(e => {
        e.preventDefault();
        const $action = $formulario.attr('action');
        const $data = $formulario.serialize();
        $.post($action, $data).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Passagem Comprada!',
                text: 'Obrigado pela preferência!',
                footer: '<a href="/.index.html">Voltar para home</a>'
            });
        });
    });

});

// document.getElementById('btnForm').addEventListener('click', function(){
//     alert('Compra realizada com sucesso!')
// })

