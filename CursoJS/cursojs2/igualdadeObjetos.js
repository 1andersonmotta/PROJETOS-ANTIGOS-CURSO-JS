// Igualdade de Objetos 

// criar 2 objetos 
//Criar 2 funções para comparar 2 objetos iguais em questao propiedade e endereo de memória

function Endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
    
}

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');

function saoIguais(endereco1,endereco2) {
    //comparar se as propiedades são iguais e retorna true ou false
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
    
}
console.log(saoIguais(endereco2,endereco1))
function temEnderecoMemoriaIguais(endereco1,endereco2) {
    //comparando se a referencia do objeto aponta mesmo local na memoria
    return endereco1 === endereco2;

    
}
console.log(temEnderecoMemoriaIguais(endereco2,endereco1))
