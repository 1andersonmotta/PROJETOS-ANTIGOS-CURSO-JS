//esvaziar , zerar um Array ... nao funciona em variaveis constante

let numeros = [1,2,3,4,5,6]

//soluçao 1
numeros = [];

//solução 2  metodo mais clean!
numeros.length = 0;

//solução 3 
numeros.splice(0,numeros.length)

//solução 4 
while (numeros.length > 0 )
  numeros.pop()