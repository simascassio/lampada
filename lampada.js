var lamp = window.document.getElementById('lampada')


function ligar(){
 lamp.src = 'lampa_ligada.svg'
         
}
function desligar (){
        lamp.src = 'lampada_desligada.svg'
}
lamp.addEventListener ('click', quebrar)
function quebrar(){
    lamp.src = 'quebrada.svg'
}