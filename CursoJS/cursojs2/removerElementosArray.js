// removendo elementos em array

const numeros = [1,2,3,4,5,6]

//remover final ou ultimo  .pop
const ultimo = numeros.pop();
console.log(ultimo)


//remover no inicio  .shift
const primeiro = numeros.shift();
console.log(primeiro)


//remover no meio  .splice  (numero do indice, quantidade de elementos)
const meio = numeros.splice(2,1)
console.log(meio)