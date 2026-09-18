const Caso = require("./Caso")

class Trabalhista extends Caso{
    resumo(){
        return `Caso trabalhista em andamento`
    }
}

module.exports = Trabalhista