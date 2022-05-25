//encontrando elementos array (primitivos)

const numeros = [1,2,3,4];
//indexOf = busca dentro do array o indice do numero ou string ou retorna -1 se nao encontrar o valor
console.log(numeros.indexOf(2));


//lastIndexOf = passa o ultimo valor do indice 
console.log(numeros.lastIndexOf(4));


//como consfirmar se temos o valor em um array
console.log(numeros.indexOf(2) !== -1)
//true ou false
//pode usar tbm o .includes mais facil no ecm6
console.log(numeros.includes(2));
//true ou false 

const nomes = ['a','b','c']
console.log(nomes.indexOf('b'))

console.log(nomes.lastIndexOf('g') !== -1)

console.log(nomes.includes('b'))