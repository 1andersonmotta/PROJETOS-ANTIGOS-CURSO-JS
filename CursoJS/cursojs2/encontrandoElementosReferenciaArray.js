//encontrando dentro array elementos tipo de referencia

const marcas = [
    {id:1 , nome:'a'},
    {id:2 , nome:'b'}
    
]
//precisa usar .find passar a função que recebe um parametro qualquer e retorna o objeto{} se encontrado ou undefined
const find = marcas.find(function(marca){
    return marca.nome === 'a';
})

console.log(find)

const carros = [
    {marca:'ferrari', cv:100},
    {marca:'fiat', cv:10}
]

var verificar= carros.find(function(objeto){
    return objeto.marca === 'fiat'
})

console.log(verificar)