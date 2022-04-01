function mostrarTabuada() {
    var num = document.getElementById('number').value;
    
    const tab = document.getElementById('tabuada');

    if(num) {
        tab.innerHTML = ''
        for(var i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num} X ${i} = ${num * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
        
        tab.size = tab.length;
    } else {
        alert('Por favor, digite um número!')
    }
}