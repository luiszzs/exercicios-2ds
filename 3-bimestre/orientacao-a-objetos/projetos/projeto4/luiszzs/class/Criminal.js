const Caso = require("./Caso")

class Criminal extends Caso{
    resumo(){
        return `Caso criminal em andamento`
    }
}

module.exports = Criminal