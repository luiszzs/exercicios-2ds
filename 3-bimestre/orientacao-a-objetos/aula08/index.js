class Cofre{
    #codigo

    constructor(codigo){
        this.#codigo = codigo
    }

    verificarCodigo(codigo){
        if(codigo == this.#codigo){
            return true
    }else{
        return false
    }
}
}

const senha = new Cofre(1234)

console.log(senha.verificarCodigo(0000))