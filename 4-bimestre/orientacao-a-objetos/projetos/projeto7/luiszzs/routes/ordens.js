const express = require("express")
const validarOrdem = require("../middlewares/validarOrdem")
const router = express.Router()

const ordens = [
    { id: 1, motorista: "Ana", servico: "Troca de Oleo", valor: 180, situacao: "concluida" },
    { id: 2, motorista: "Bruno", servico: "Alinhamento", valor: 120, situacao: "executando" },
    { id: 3, motorista: "Carla", servico: "Revisao", valor: 400, situacao: "executando" }
]

router.get("/ordens", (req, res) => {
    res.json(ordens)
})

router.get("/encomendas", (req, res) => {
    const status = req.query.status
    const quantidadeMin = Number(req.query.quantidadeMin)
    if(status && quantidadeMin){
        return res.json(encomendas.filter(l => l.status == status && l.quantidade >= quantidadeMin))
    }
    if(status){
        return res.json(encomendas.filter(s => s.status == status))
    }
    if(quantidadeMin){
        return res.json(encomendas.filter(p => p.quantidade >= quantidadeMin))
    }

    res.json(encomendas)
})

router.get("/ordens/:id", (req, res) => {
    const id = Number(req.params.id)
    const ordem = ordens.find(o => o.id === id)

    if(!ordem) {
        return res.status(404).json({ "erro": "Ordem nao encontrado"})
    }
})

module.exports = router