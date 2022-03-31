function mostrarTabuada() {
    var numero = document.getElementById('number').value;
    
    const select = document.getElementById('tabuada');

    if(numero) {
        select.innerHTML = ''
        for(var i = 0; i <= 10; i++) {
            var res = numero * i;
            select.options[select.options.length] = new Option(`${numero} X ${i} = ${res}`);
        }
        
        select.size = select.length;
    } else {
        alert('Por favor, digite um número!')
    }
}