//interando , percorrer iten array ...
//forEach
const numeros = [1,2,3,4,5]
numeros.forEach(function(numero){
    console.log(numero)
})

//arrow function
numeros.forEach((numero,indice) => console.log(numero,indice))







//for of
for (numero of numeros)
    console.log(numero);

let a = ['anderson','motta']
for (b of a)
console.log(b)
// sempre (o valor, o indice do valor)
a.forEach((nome,indice) => console.log(nome,indice))