const express = require("express")
const ordens = require("./routes/ordens")

const app = express()
app.use(express.json())

app.use("/", ordens)

app.use((req, res, next) => {
    res.status(404).json({
        "erro": "Rota nao encontrada"
    })
})

module.exports = app