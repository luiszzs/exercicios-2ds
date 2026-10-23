const express = require("express")
const exposicoesRouter = require("./exposicoes")
const promocoesRouter = require("./promocoes")
const visitanteRouter = require("./visitantes")

const router = express.Router()

router.get("/", (req, res) => {
    res.json({ mensagem: "API de Museu"} )
})

router.use("/exposicoes", exposicoesRouter)
router.use("/visitantes", visitanteRouter)
router.use("/promocoes", promocoesRouter)

module.exports = router