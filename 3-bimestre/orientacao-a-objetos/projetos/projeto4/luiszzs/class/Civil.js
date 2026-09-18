const Caso = require("./Caso")

class Civil extends Caso{
    resumo(){
        return `Caso cível em andamento`
    }
}

module.exports = Civil