function exibir() {
    let nome = document.getElementById('nome').value;
    let dataNasc = document.getElementById('idade').value;
    let sexo = document.getElementsByName('sex');
    let senha = document.getElementById('senha').value;
    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let cep = document.getElementById('cep').value;
    let sat = document.getElementById('sat').value;
    let com = document.getElementById('com').value;
    let res = document.getElementById("res");
    
    
    

    if(sexo[0].checked){
        sexo = 'Masculino'
    }else if (sexo[1].checked){
        sexo = 'Feminino'
    }else{
        sexo = 'Indefinido'
    }

    if(sat <= 0){
        sat = 'Insatisfeito'
    }else if(sat == 10){
        sat = 'Pouco Satisfeito'
    }else {
        sat = 'Muito Satisfeito'
    }


    res.innerHTML = `Seu nome é: ${nome}, sua data de nacimento: ${dataNasc}, 
    sexo: ${sexo}, sua senha é ${senha}, cidade: ${cidade}, 
    bairro: ${bairro}, rua: ${rua}, numero: ${numero}, cep: ${cep},
    satisfação: ${sat}, comentário: ${com}.`

    
}