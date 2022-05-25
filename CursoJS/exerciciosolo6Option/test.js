function calcular(){
    let select = window.document.getElementById('tab')
    let op = Number(select.value)
    let res = window.document.getElementById('res')
    let img = window.document.getElementById('img')

    if (op == 1){
        res.innerHTML='Serviço de Dj R$300,00 '
        img.src='fotodj.png'
        img.style.marginLeft='45px'
    }else if (op == 2){
        res.innerHTML='Serviço de Som R$300,00 '
        img.src='logoss.png'
        img.style.marginLeft='40px'



    }else if (op == 3){
        res.innerHTML='Serviço de Luz R$250,00 '
        img.src='tripeluz1.png'
        img.style.marginLeft=''


    }else if(op == 4){
    res.innerHTML='Dj Som e Luz tripé  R$550,00 ' 
    img.src='tripeluz1.png' 
    img.style.marginLeft=''
  
    }else if (op == 5){
        res.innerHTML = 'Dj Som e Luz box 500,00'
        img.src='box1.png'
    }else{
        res.innerHTML='Dj, Som e Luz céu de globos 650,00 '
        img.src='ceudeglobos1.png'
    }

}