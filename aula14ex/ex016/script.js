function contar() {
    
    var inicio = document.getElementById('inicio').value

    var i = Number(inicio)

    var fim = document.getElementById('fim').value

    var f = Number(fim)

    var passo = document.getElementById('passo').value

    var p = Number(passo)
    
    var res = document.getElementById('res')

    res.innerHTML = ''
    res.style.fontSize = '1.2rem';
    if(inicio && fim) {
        if(p === 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        res.innerHTML += '<p>Contando:</p>'
        do {
            
            res.innerHTML += `${i}`
            i += p
            if(i <= f) {
                res.innerHTML += `👉`
            } else {
                res.innerHTML +=`🏁`
            }
        } while(i <= f)
    } else {
        res.innerHTML += '<p>Impossível contar!</p>'
    }
}