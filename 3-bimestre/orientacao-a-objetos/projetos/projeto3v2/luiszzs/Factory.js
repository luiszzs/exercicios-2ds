const Contrato = require("./Contrato")

class Factory{
    static criar(tipo, cliente){

        if(tipo === "diaria"){
            return new Contrato.Diaria(cliente)
        }

        if(tipo === "semanal"){
            return new Contrato.Semanal(cliente)
        }
        
        if(tipo === "mensal"){
            return new Contrato.Mensal(cliente)
        }

        if(tipo === "anual"){
            return new Contrato.Anual(cliente)
        }

        throw new Error("Tipo de contrato inválido")
        
    }
}

module.exports = Factory