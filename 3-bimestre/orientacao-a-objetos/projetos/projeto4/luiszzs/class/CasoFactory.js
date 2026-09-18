const Caso = require("./Caso")
const Civil = require("./Civil")
const Trabalhista = require("./Trabalhista")
const Criminal = require("./Criminal")
const Tributario = require("./Tributario")
const Instancia = require("./Instancia")
const CarteiraJuridica = require("./CarteiraJuridica")

class CasoFactory{
    static criar(tipo, nomeDocliente, numeroDoProcesso){
        if(tipo === "civil"){
            return new Civil(nomeDocliente, numeroDoProcesso)
        }
         if(tipo === "trabalhista"){
            return new Trabalhista(nomeDocliente, numeroDoProcesso)
        }
         if(tipo === "criminal"){
            return new Criminal(nomeDocliente, numeroDoProcesso)
        }
         if(tipo === "tributario"){
            return new Tributario(nomeDocliente, numeroDoProcesso)
        }

        throw new Error("Tipo de caso inválido")
    }
}


module.exports = CasoFactory