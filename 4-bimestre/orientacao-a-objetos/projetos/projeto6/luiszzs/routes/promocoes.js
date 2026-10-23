const express = require("express")
const router = express.Router()

const promocoes = [
    { id: 1, nome: "Fosseis", desconto: 10 },
    { id: 2, nome: "Arte Moderna", desconto: 20 }
]

router.get("/", (req, res) => {
    res.json( promocoes )
})

router.get("/total", (req, res) => {
    res.json({ total: promocoes.length })
})


module.exports = router