// camelCase  umDoisTresQuatro
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

// Pascal Case  UmDoisTresQuatro
//this. = referncia ao objeto
function Celular(marca,tela,capacidade,bateria) {
    this.marca = marca,
    this.tela = tela,
    this.bateria = bateria,
    this.capacidade = capacidade,
    this.ligar = function () {
        console.log('Fazendo Ligação...');
        
    }
    
}
//new = utiliza todos metodos do iten chamado, referencia
var novoCelular = new Celular ('asus',5.5,1500,29000);
console.log(novoCelular)
