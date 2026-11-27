const express = require("express")
const app = express()

app.use(express.json())

const pedidos = [
    { id: 1, cliente: "Ana", valor: 100 },
    { id: 2, cliente: "Bruno", valor: 250 }
]

function validarPedido(req, res, next) {
    if (!req.body.cliente) {
        return res.status(400).json({
            erro: "O campo cliente e obrigatorio"
        })
    }

    if (typeof req.body.valor !== "number") {
        return res.status(400).json({
            erro: "O campo valor deve ser um numero"
        })
    }

    next()
}

app.get("/pedidos", (req, res) => {
    const valorMin = Number(req.query.valorMin)

    if (!req.query.valorMin) {
        return res.status(200).json(pedidos)
    }

    res.status(200).json(
        pedidos.filter(p => p.valor >= valorMin)
    )
})

app.get("/pedidos/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const pedido = pedidos.find(p => p.id === id)

    if (!pedido) {
        const erro = new Error("Pedido nao encontrado")
        erro.status = 404

        return next(erro)
    }

    res.status(200).json(pedido)
})

app.post("/pedidos", validarPedido, (req, res) => {
    const novoPedido = {
        id: pedidos.length + 1,
        cliente: req.body.cliente,
        valor: req.body.valor
    }

    pedidos.push(novoPedido)

    res.status(201).json({
        mensagem: "Pedido criado"
    })
})

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})

app.use((erro, req, res, next) => {
    res.status(erro.status || 500).json({
        erro: erro.message
    })
})

module.exports = app