let numbers = [];

let number = document.getElementById('number');

let tab = document.getElementById('numeros');

let res = document.getElementById('res');

function addNumber() {

    if(Number(number.value) < 1 || Number(number.value) > 100 || Number(number.value) === '') {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        let pos = numbers.indexOf(Number(number.value))

        if (pos == -1) {
            numbers.push(Number(number.value));
            let item = document.createElement('option')
            item.text = `Valor ${Number(number.value)} adicionado.`
            item.value = `${Number(number.value)}`
            tab.appendChild(item)
            res.innerHTML = ''  
            
        } else {
            alert('Valor inválido ou já encontrado na lista.')
        }
    }   
    number.value = ''
    number.focus()
    
}

function AnalisarNumeros() {

    if(numbers.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${numbers.length} números cadastrados.</p>`
    
        let max = Math.max(...numbers)
    
        let min = Math.min(...numbers)
    
        res.innerHTML += `<p>O maior valor informado foi ${max}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${min}.</p>`
    
        let soma = 0;
    
        for(let i = 0; i < numbers.length; i++) {
            soma += Number(numbers[i]);
        }
    
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    
        res.innerHTML += `<p>A média dos valores digitados é ${soma/numbers.length}.</p>`
    
        console.log(numbers)
    }
}