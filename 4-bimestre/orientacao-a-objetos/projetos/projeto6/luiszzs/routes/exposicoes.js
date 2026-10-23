const express = require("express")
const router = express.Router()

const exposicoes = [
    { id: 1, nome: "Fosseis", area: "ciencias", preco: 15, aberta: true },
    { id: 2, nome: "Arte Moderna", area: "artes", preco: 20, aberta: true },
    { id: 3, nome: "Cidade Antiga", area: "historia", preco: 10, aberta: false }
]

router.get("/", (req, res) => {
    res.json(exposicoes)
})

router.get("/abertas", (req, res) => {
    res.json(exposicoes.filter(exposicoes => exposicoes.aberta))
})

router.get("/total", (req, res) => {
    res.json({ total: exposicoes.length})
})

router.post("/", (req, res) => {
    res.status(201).json({ "mensagem": "Cadastro de exposicao realizado" })
})

module.exports = router