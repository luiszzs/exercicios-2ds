const http = require("http")
const { carregarConfig } = require("./config")

function handler(req, res){
    const config = carregarConfig()

     if(req.url === "/"){
        res.statusCode = 200
        res.end(`Monitor do servico: ${config.servico}`)
        return
    }

    if(req.url === "/pulso"){
        res.statusCode = 200
        res.end("pulso")
        return
    }

    if(req.url === "/status"){
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({"online": true, "servico": config.servico, "porta": config.porta || 4000, "ambiente": config.ambiente}))
        return
    }

    if(req.url === "/versao"){
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({"servico": config.servico, "versao": process.env.VERSAO || "1.0.0"}))
        return
    }

    res.statusCode = 404
    res.end("Rota nao encontrada")
}

module.exports = handler