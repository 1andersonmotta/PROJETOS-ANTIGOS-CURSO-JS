var mercado = [
    {nome : 'Arroz',valor : 16 },
    {nome: 'Feijao', valor: 6},
    {nome: 'Farinha', valor: 3},
    {nome: 'Oleo', valor: 8},
    {nome: 'Ovo', valor:12},
    {nome: 'Açucar', valor:4}

    
];

// Adicionando Itens Objetos no Mercado no Final do Array
mercado.push({nome:'Azeite',valor:50});


// Filter para selecionar o iten do objeto em truthy ou falsy
const preço = mercado.filter(valores => valores.valor <=15);

// Map pra pegar só o nome do objeto
console.log(preço.map(nomes => nomes.nome));

mercado.push({nome:'Sabonete',valor:2,categoria:'limpeza'});
console.log(mercado);
console.log(preço)

