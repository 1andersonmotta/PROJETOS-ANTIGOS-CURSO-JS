// recebendo dados Input
//exercicio ENTRADA BALADA - 

function verificar(){
    var convidados = ['anderson motta','livia parente','joao','maria']
    var anfitrião = ['juliana','junior']
    var nome = window.document.getElementById('nome').value
    var convidou = window.document.getElementById('Convidou').value
    var res = window.document.getElementById('res')

    if (nome === '' || convidou === ''){
        return alert('Verifique os Dados!!');
    }
    if (convidados.includes(nome.toLowerCase()) && anfitrião.includes(convidou.toLowerCase()) ){
        res.innerHTML="Autorizado \u{1F44D}",
        document.body.style.background='#4ed659';
    }else {
        res.innerHTML="Penetra \u{1F44E}",
        document.body.style.background='red'}
}

