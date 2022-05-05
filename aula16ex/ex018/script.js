let numbers = [];

function addNumber() {

    let number = document.getElementById('number').value;

    if(number > 100 || number === ''){
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        let pos = numbers.indexOf(number)

        if (pos == -1) {
            numbers.push(number);
            res.innerHTML = ''
            const tab = document.getElementById('numeros');
        
            tab.innerHTML = ''
        
            for(var i = 0; i < numbers.length; i++) {
                let item = document.createElement('option')
                item.text = `Valor ${numbers[i]} adicionado.`
                item.value = `${numbers[i]}`
                tab.appendChild(item)
            }
        } else {
            alert('Valor inválido ou já encontrado na lista.')
        }
    }   

    
}

function AnalisarNumeros() {

    if(numeros.length == 0){
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
            soma = soma + Number(numbers[i]);
        }
    
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    
        res.innerHTML += `<p>A média dos valores digitados é ${soma/numbers.length}.</p>`
    
        console.log(numbers)
    }
}