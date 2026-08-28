class Funcionario{
    #salario

    static quantidade = 0

    constructor(nome, cargo, salario){
        this.nome = nome
        this.cargo = cargo
        this.#salario = salario

        Funcionario.quantidade++
    }

    apresentar(){
        return `${this.nome} - ${this.cargo}`
    }
    get salario(){
        return this.#salario
    }

    static quantidade(){
        return this.quantidade
    }

    static quantidadeFuncionarios(){
        return Funcionario.quantidade
    }

    set salario(novoSalario){
        if (novoSalario >= 0 ){
            this.#salario = novoSalario
        }
    }

    static criarFuncionario(nome, cargo, salario){
        return new Funcionario(this.nome, this.cargo, this.salario)

    }


}

module.exports = Funcionario
