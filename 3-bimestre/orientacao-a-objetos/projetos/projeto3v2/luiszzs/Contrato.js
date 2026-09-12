class Contrato{

    constructor(cliente){
        
        if(!cliente){
            throw new Error("Cliente é obrigatório")
        }

        this.cliente = cliente
    }
    emitir(){
        return ""
    }
}

class Diaria extends Contrato{
    emitir(){
        return `Contrato de locação diária emitido para: ${this.cliente}`
    }
}

class Semanal extends Contrato{
    emitir(){
        return `Contrato de locação semanal emitido para: ${this.cliente}`
    }
}

class Mensal extends Contrato{
    emitir(){
        return `Contrato de locação mensal emitido para: ${this.cliente}`
    }
}

class Anual extends Contrato{
    emitir(){
        return `Contrato de locação anual emitido para: ${this.cliente}`
    }
}

module.exports = Contrato
module.exports.Diaria = Diaria
module.exports.Semanal = Semanal
module.exports.Mensal = Mensal
module.exports.Anual = Anual