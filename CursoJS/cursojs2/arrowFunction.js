// arrow functions (função de setas)
//.find = achar    procura a propiedade e retorna o objeto referente

const marcas = [
    {id:1, nome:"a"},
    {id:2, nome:"b"}
]

console.log(marcas.find((marca) => marca.nome === 'a'))

const carros = [
    {marca:'ferrari', ano:2020},
    {marca:'fiat', ano:97}
]

console.log( carros.find((carro) => carro.marca === 'ferrari'))

const casas = [
    {casa:1, bairro:2},
    {casa:2, bairro:3}
]

var confere= casas.find((casaok)=> casaok.bairro === 2)
console.log(confere)