const Ligar = document.getElementById('Ligar');
const Desligar = document.getElementById('Desligar')
const lamp = document.getElementById('lamp')

function lampligar(){
    lamp.src ='./img/ligada.jpg'
}
function lampdesligar(){
lamp.src = './img/desligada.jpg'
}


Ligar.addEventListener('click',lampligar)
Desligar.addEventListener('click',lampdesligar)
lamp.addEventListener('mouseover',lampligar)
lamp.addEventListener('mouseleave',lampdesligar)