class Produto{
    #preco

    constructor(preco){
        this.#preco = preco
    }

    get preco(){
        return this.#preco
    }

    set preco(novoPreco){
        if(novoPreco >= 0){
            this.#preco = novoPreco
        }
    }
}

const preco = new Produto(100)

module.exports = preco