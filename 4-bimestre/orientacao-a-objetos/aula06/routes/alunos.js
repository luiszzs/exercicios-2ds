const express = require("express")
const router = express.Router()

const alunos = [
    { id: 1, nome: "Ana", nota: 8 },
    { id: 2, nome: "Bruno", nota: 6 }
]

router.get("/", (req, res) => {
    res.json(alunos)
})

router.get("/aprovados", (req, res) => {
    res.json(alunos.filter(alunos => alunos.nota >= 7))
})

module.exports = router