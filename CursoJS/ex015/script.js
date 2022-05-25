function verificar(){
    var data = new Date() //referencia a data do sistema
    var ano = data.getFullYear() // referencia ao ano na data do sistema
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')//criando elemento no html
        img.setAttribute('id','foto')//atribuindo valor id ='foto'
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'homem-bebe.png')
                document.body.style.background='#826eee'

            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
                document.body.style.background='#826eee'

            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
                document.body.style.background='#826eee'

            }else {
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
                document.body.style.background='#826eee'

            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'mulher-bebe.png')
                document.body.style.background='#ee51ad'
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
                document.body.style.background='#ee51ad'

            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
                document.body.style.background='#ee51ad'

            }else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
                document.body.style.background='#ee51ad'

            }
        }
        res.style.textAlign = 'center' //style sempre referencia stilo ao css
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //criando elemento filho img  na div res

    }

}