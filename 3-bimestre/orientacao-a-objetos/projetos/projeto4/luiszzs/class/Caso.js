class Caso{
    #nomeDoCliente
    #numeroDoProcesso

    constructor(nomeDoCliente, numeroDoProcesso){
        this.#nomeDoCliente = nomeDoCliente
        this.#numeroDoProcesso = numeroDoProcesso
    }


    get nomeDoCliente(){
        return this.#nomeDoCliente    }

    get numeroDoProcesso(){
        return this.#numeroDoProcesso
    }
    resumo(){
        return `Caso registrado no sistema`
    }

}

module.exports = Caso