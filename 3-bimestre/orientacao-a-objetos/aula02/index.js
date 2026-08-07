class Funcionario {
    constructor(nome, cargo, salario){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
}

const joao = new Funcionario("João", "Desenvolvedor", 5000)

module.exports = joao