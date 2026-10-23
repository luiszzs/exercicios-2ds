const express = require("express")
const router =  express.Router()

const visitantes = [
    { id: 1, nome: "Ana", tipo: "estudante" },
    { id: 2, nome: "Bruno", tipo: "comum" }
]

router.get("/", (req, res) => {
    res.json(visitantes)
})

router.get("/total", (req, res) => {
    res.json({ total: visitantes.length})
})

module.exports = router