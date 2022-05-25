const celular = {
    marca : 'iphone',
    tela : {
        vertical : 155,
        horizontal : 75
    },
    capacidade : 5000,
    ligar : function () {
        console.log('Fazendo ligação...')
    },
    bateria : 16000
}

//factory functions 

function criarCelular(marca,tela,capacidade,bateria) {
    return {
            marca,
            tela,
            capacidade,
            bateria,
            ligar(){
                console.log('Fazendo Ligação...')
            }
    }
            
}
var celularAnderson = criarCelular('Iphone',5.5,1300,18000)
console.log(celularAnderson)

