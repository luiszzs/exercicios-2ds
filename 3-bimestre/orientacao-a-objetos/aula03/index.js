class Animal{
    constructor(nome, especie){
        this.nome = nome
        this.especie = especie
    }
}

const dog = new Animal("Rex", "Cachorro")
const cat = new Animal("Mimi", "Gato")

module.exports = [dog, cat]