function tabuada(){
    let num = document.getElementById('numero')
    let set = document.getElementById('seltab')
    if (num.value.length == 0){
         window.alert('digite um numero')
    }else{

        let n = Number(num.value)
        let c = 1
        set.innerHTML=''
        while (c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            set.appendChild(item)
            c++
        }
    }

}