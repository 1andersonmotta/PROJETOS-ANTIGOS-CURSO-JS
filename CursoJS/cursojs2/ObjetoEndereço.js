//Javascript - Objeto Endereço

//Criar um objeto endereço que contem:
//rua
//cidade
//cep
//exibirEndereço(endereço)



let endereço = {
rua: 'Antonio José Catronovo',
cidade: 'Sorocaba',
CEP: 18095070

};
//loop for in = utilizado para interar sobre propiedades em um objeto
function exibirEndereco(endereço){
    for (let propiedade in endereço)
    console.log(propiedade,endereço[propiedade])

}
exibirEndereco(endereço)