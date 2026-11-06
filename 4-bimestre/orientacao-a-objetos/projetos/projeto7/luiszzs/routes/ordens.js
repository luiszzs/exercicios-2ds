const express = require("express")
const validarOrdem = require("../middlewares/validarOrdem")
const router = express.Router()

const ordens = [
    { id: 1, motorista: "Ana", servico: "Troca de Oleo", valor: 180, situacao: "concluida" },
    { id: 2, motorista: "Bruno", servico: "Alinhamento", valor: 120, situacao: "executando" },
    { id: 3, motorista: "Carla", servico: "Revisao", valor: 400, situacao: "executando" }
]

router.get("/ordens", (req, res) => {
    const situacao = req.query.situacao
    const valorMin = Number(req.query.valorMin)
    
    if(situacao && valorMin){
        return res.json(ordens.filter(l => l.situacao == situacao && l.valor >= valorMin))
    }
    if(situacao){
        return res.json(ordens.filter(s => s.situacao == situacao))
    }
    if(valorMin){
        return res.json(ordens.filter(v => v.valor >= valorMin))
    }

    res.json(ordens)
})

router.get("/ordens/resumo", (req, res) => {
    res.json({ "total": ordens.length, "valorTotal": ordens.reduce((acumulador, atual) => {
    return acumulador + atual.valor
    }, 0) })
})

router.get("/ordens/:id", (req, res) => {
    const id = Number(req.params.id)
    const ordem = ordens.find(o => o.id === id)

    if(!ordem) {
         res.status(404).json({ "erro": "Ordem nao encontrado"})
    }

    res.json(ordem)
})


router.post("/ordens", validarOrdem, (req, res) => {
    const tamanho = ordens.length
    const novoCliente = req.body
    novoCliente.id = tamanho + 1
    novoCliente.situacao = "aberta"
    ordens.push(novoCliente)
    res.status(201).json({ "mensagem": "Registro de ordem criado"})
})

module.exports = router