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

//clonar / copiar objetos
const newCel = Object.assign({/*pode adicionar itens*/},celular)

//segunda opção para clonar / copiar objetos
// Spread  = ... 3 pontos copia o objeto desejado
const newCel1 = {...celular}


console.log(newCel1)