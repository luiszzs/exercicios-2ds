class CarteiraJuridica {
    constructor(nome) {
        this.nome = nome
        this.membros = []
        this.categorias = []
    }

    adicionarCategoria(item) {
        this.categorias.push(item)
    }

    adicionarMembro(membro) {
        this.membros.push(membro)
    }
}

module.exports = CarteiraJuridica