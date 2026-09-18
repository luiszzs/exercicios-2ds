const CasoFactory = require("./CasoFactory")
const Instancia = require("./Instancia")

class CarteiraJuridica{
    constructor(nome){
        this.nome = nome
        this.membros = []
        this.categorias = []
    }

    static adicionarCategoria(){
        return this.categorias.push
    }

    static adicionarMembros(){

    }
}

module.exports = CarteiraJuridica