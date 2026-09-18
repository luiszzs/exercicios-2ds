const Caso = require("./Caso")

class Tributario extends Caso{
    resumo(){
        return `Caso tributário em andamento`
    }
}

module.exports = Tributario