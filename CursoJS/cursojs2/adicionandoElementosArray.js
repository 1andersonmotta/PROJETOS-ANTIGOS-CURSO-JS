//adiionando elementos em ARRAY

const numeros = [1,2,3];

// inserir no inicio
//unshift empurra os arrays e inseri no inicio
numeros.unshift(0);
console.log(numeros);

//meio
// splice escolhe primeiro o indice, 
//depois o que quer deletar  no caso de'0' nenhum deletado 
//, depois o valor a ser adicionado
numeros.splice(1,0,'a');
console.log(numeros)

//final
// push adiciona no final do array.
numeros.push(5);
console.log(numeros);

numeros.unshift(9);
console.log(numeros)

numeros.splice(0,1,8);
console.log(numeros)

numeros.push('vrau')
console.log(numeros)