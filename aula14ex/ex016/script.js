function contar() {
    
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value

    res.innerHTML = ''
    res.style.fontSize = '1.2rem';
    if(inicio && fim) {
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)
        if(p <= 0 || p == "") {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            res.innerHTML += '<p>Contando:</p>'
            do {
                res.innerHTML += `${i}`
                i += p
                if(i <= f) {
                    //res.innerHTML += `👉`
                    res.innerHTML += `\u{1F449}`
                } else {
                    //res.innerHTML +=`🏁`
                    res.innerHTML += `\u{1F3C1}`
                }
            } while(i <= f)
        } else {
            res.innerHTML += '<p>Contando:</p>'
            do {
                res.innerHTML += `${i}`
                i -= p
                if(f <= i) {
                    //res.innerHTML += `👉`
                    res.innerHTML += `\u{1F449}`
                } else {
                     //res.innerHTML +=`🏁`
                     res.innerHTML += `\u{1F3C1}`
                }
            } while(f <= i)
        }
    } else {
        res.innerHTML += '<p>Impossível contar!</p>'
    }
}