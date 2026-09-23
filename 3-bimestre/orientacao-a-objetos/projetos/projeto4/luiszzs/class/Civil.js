const Caso = require("./Caso")

class Civil extends Caso {
    resumo() {
        return `Caso cível em andamento`
    }

    adicionarRegistro(registro) {
        if (registro.valor < 0) {
            throw new Error("Valor inválido")
        }
        if (!this.registros) {
            this.registros = []
        }
        this.registros.push(registro)
    }
}

module.exports = Civil