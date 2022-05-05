let amigo = {
    nome: 'Hantonny', 
    sexo: 'M', 
    peso: 70,
    engordar(p){
        console.log('Engordou')

        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)