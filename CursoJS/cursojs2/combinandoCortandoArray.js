// combinando e cortando arrays

const primeiro= [1,2,3];
const segundo = [4,5,6];

//concact combinar
const combinado=primeiro.concat(segundo);
console.log(combinado)

//dividir .slice (começa indice, para no indice escolhido menos 1)
const cortado=combinado.slice(1,3);
console.log(cortado)

//apenas 1 indice no slice sendo primeiro ele corta ate final

const a = 'Anderson '
const b = 'Motta'
const c = a.concat(b)
console.log(c)

const d =['Anderson','parente','motta']
const e = d.slice(1)
console.log(e)


