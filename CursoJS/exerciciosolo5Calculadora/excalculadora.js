function calcular(){

let numero1 = window.document.getElementById('num1')
let numero2 = window.document.getElementById('num2')
let ope = window.document.getElementById('operação')
let res = window.document.getElementById('res')
let num1 = Number(numero1.value)
let num2 = Number(numero2.value)
let op = String(ope.value)


 if  (op == '+' || op == '-' || op == '/' || op == '*'){

}else  { window.alert("operação inválida")

}

 if (op == "+"){
    res.innerHTML= `${num1+num2} \u{2714}`
}else if (op == "-"){
    res.innerHTML=`${num1-num2} \u{2714}`
}else if (op == '/'){
    res.innerHTML=`${num1/num2} \u{2714}`

}else if (op == '*'){
    res.innerHTML=`${num1*num2} \u{2714}`
}
numero1.focus()
numero1.value=''
numero2.value=''
ope.value=''
}

