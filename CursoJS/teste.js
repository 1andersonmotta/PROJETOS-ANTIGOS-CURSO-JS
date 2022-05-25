function play(){
    window.document.location=URL='audio.mp3'
}
function vai(){
    var cria = document.createElement('p')
    cria.setAttribute('id','paragrafo')
    document.body.appendChild(cria)
    cria.innerHTML='porra'

}


function teste (){

var n1 = window.document.getElementById('n1')
var n2 = window.document.getElementById('n2')
var res = window.document.getElementById('res')

res.innerHTML=`a soma é ${Number(n1.value) + Number(n2.value)}`
mostrarObjeto()
}

var objeto = {
    nome: 'Anderson',
    idade: 36,
    cor: 'branca'
}
function mostrarObjeto(){
    console.log(objeto)
    
}
objeto.datanascimento = 1985
delete objeto.cor

function nome (nome){
    for(let i =0 ; i< nome.length ; i++){
        console.log(nome[i] ,+i)
    }
}
nome('antonio')

    