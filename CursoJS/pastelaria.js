
var quantidade = []
var valor = 0
var total = null
var troco = null
var recebi = null
var iten = null

var soma = 0
var res = document.getElementById('res');

var produto = []

function mesa01(params) {
    window.location.href="http://127.0.0.1:5500/CursoJS/mesa01.html";
}



function onclick1 (){
    var nomeProduto = window.document.getElementById("produto");
    var valores = window.document.getElementById("valores");
    var res = document.getElementById('res');
    var valor = 0;
    res.innerHTML.value=('');

        res.innerHTML=("REFRIGERANTE R$3,50");
        valor = 3.50;
        nomeProduto.value="REFRIGERANTE";
        valores.value=("R$3,50")
        return console.log(valor);
}

function verificarRadio(){
    var res = document.getElementById('res');
    var nomeProduto = window.document.getElementById("produto");
    var quantidade = window.document.getElementById("quantidade");
    var valores = window.document.getElementById("valores");
    var rad = document.getElementsByName("radiox")
    var valor = null;

    if(rad[0].checked){
        
        res.innerHTML=(` PASTEL R$7,50`);
        valor = 7.50;
        nomeProduto.value=("PASTEL");
        valores.value=(7.50+"0");
        quantidade.value=(1)

    }
    else if(rad[1].checked){
        res.innerHTML=(` REFRIGERANTE R$3,25`);
        valor = 3.25;
        nomeProduto.value="REFRIGERANTE";
        valores.value=(3.25);
        quantidade.value=(1)

        
    }
    else if (rad[2].checked){
        res.innerHTML=(` SUCO R$6,50`);
        valor = 6.50;
        nomeProduto.value=("SUCO");
        valores.value=(6.50+"0")
        quantidade.value=(1)

    }
        console.log(valor)

    
}

    var mesa = []
    var soma = 0
function adicionar(){
    var res = document.getElementById('res');
    var nomeProduto = window.document.getElementById("produto").value;
    var array = document.getElementById("array");
    var quantidade = window.document.getElementById("quantidade").value;
    var valores = window.document.getElementById("valores").value;
    var paragrafo = document.createElement('p');
    //var [nomerProuto,array,uantiade,valores,paragrafo] = pearElemetnroDaTela()
    paragrafo.setAttribute("id","par");
    document.body.appendChild(paragrafo);
    valorPorItem = Number(quantidade) * Number(valores);
    mesa.push(valorPorItem)
    paragrafo.innerHTML=(`Qtd:${quantidade}  ${nomeProduto} Valor: ${valorPorItem.toFixed(2)}`);
    
    valorPorItem=0
    //console.log(valorPorItem)
    console.log(mesa)
    
    soma =0
    for(var i = 0 ; i < mesa.length ; i++){
        soma += mesa[i];
   }
    
    
    array.innerHTML=(`TOTAL: R$${soma.toFixed(2)} `);
    console.log(soma)
    console.log(valorPorItem)
    res.innerHTML=""
    

}
function calcular (){
    var radio = document.getElementsByName("radiox")
    var res = document.getElementById('res');
    var quantidade = window.document.getElementById('quantidade').value;
    this.valor = window.document.getElementById("valores").value;
    this.iten = String(nomeProduto);

    var paragrafo = document.createElement('p')
    paragrafo.style.border="1px solid #000";
    paragrafo.style.width="250px";
    paragrafo.style.backgroundColor="#ddd";
    paragrafo.style.padding="3px";
    paragrafo.style.boxShadow="1px 1px 2px #000"
    paragrafo.style.borderRadius="6px"
    document.body.appendChild(paragrafo);
    //console.log(total.toFixed(2));
        this.soma = 0;
    
    
    if(radio[0].checked){
        var nomeProduto = window.document.getElementById("produto").value = "Pastelll";
      //  var valor = window.document.getElementById("valores").value = 7.77;
        this.total = Number(this.quantidade) * 7.77;
         res.innerHTML=(`TOTAL = R$${this.soma}`);
        radio = 7.50;
        mesa = total;
        for(var i = 0 ; i < mesa.length ; i++){
            soma = Number(soma) + Number(this.mesa[i]);
       }

        res.innerHTML=(`TOTAL = R$${this.soma} +soma total ${this.total}`);


    }else if (radio[1].checked){
        var nomeProduto = window.document.getElementById("produto").value = "Refrigerante";
        // var valor = window.document.getElementById("valores").value = 3.50;
         radio = 3.50;
         this.total = Number(this.quantidade) * Number(this.valor);
         res.innerHTML=(`TOTAL = R$${this.soma}`);


    }else 
        
        var nomeProduto = window.document.getElementById("produto").value = "Suco";
       // var valor = window.document.getElementById("valores").value = 5.50;
        this.total = Number(this.quantidade) * Number(this.valor);
        res.innerHTML=(`TOTAL = R$${this.soma}`);

        


 /*if(nomeProduto.value == "" || nomeProduto.value <=0 || quantidade <= 0 || valor <= 0){
        alert("ERRO - Verifique os Dados")
        return
    }*/
    
    
   // mesa.push(total.toFixed(2))

    console.log(mesa)
    paragrafo.innerHTML=(`Pedido: radio ${radio} <br>  Qtd=${quantidade} <br> Produto= ${nomeProduto} <br> Valor Un.= R$${radio} <br> Total = R$${total}`)
    res.innerHTML=(`TOTAL = R$${this.soma}`);

    
    
    
}



function entrou(n1){
    n1 = Number(soma);
    var troco = document.getElementById('troco');
    var recebi = document.getElementById("recebi").value
    var volta = recebi - n1;
    troco.style.textShadow="1px 1px 1px #000";
    troco.style.backgroundColor="#eee8";
    troco.style.borderRadius="8px";
    troco.style.width="auto"
   
    if(recebi == this.soma){
        troco.style.color="#0f0";
        troco.innerHTML="Não Tem Troco!! "
    }
    else if(recebi < this.soma){
        troco.style.color="#f00";
        troco.innerHTML=(`FALTA = R$ ${volta.toFixed(2)}`)
    }else {
        troco.style.color="#0f0";
        troco.innerHTML=(`SEU TROCO É = R$ ${volta.toFixed(2)} ` );
    }
        

    if(this.soma >= 50){
            alert(" PARABENS!! VOCÊ GANHOU UM BRINDE!! VALOR A CIMA DE R$50,00")
        }

}
function voltar(){
    document.location.href="http://127.0.0.1:5500/CursoJS/pastelaria.html";
}


function relogio(){
    var datas= new Date();
    var hor= datas.getHours();
    var min= datas.getMinutes();
    var seg= datas.getSeconds();

    if (hor<10){
        hor="0"+hor
    };
    if (min<10){
        min="0"+ min
    };
    if (seg<10){
        seg="0"+seg
    };

    var horario=hor+":"+min+":"+seg;
    var hr=document.getElementById("horario").value=horario;

    requestAnimationFrame(relogio);
}
window.addEventListener("load",relogio);
