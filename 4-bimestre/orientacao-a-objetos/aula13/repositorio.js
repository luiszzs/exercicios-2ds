const fs = require("fs/promises")

const ARQUIVO = process.env.ARQUIVO_SESSOES || "sessoes.json"

async function listar() {
    try {
        const conteudo = await fs.readFile(ARQUIVO, "utf-8")
        return JSON.parse(conteudo)
    } catch (erro) {
        return []
    }
}

async function salvar(sessoes) {
    await fs.writeFile(ARQUIVO, JSON.stringify(sessoes, null, 2))
}

async function salvar(sessoes) {
    const sessoes = await listar()
    produtos.push(sessoes)
    await gravar(sessoes)
    return sessoes
}

async function atualizar(id, dados) {

    const conteudo = await fs.readFile("sessao.json", "utf-8")
    const sessao = JSON.parse(conteudo)

    const indice = sessao.findIndex(s => s.id === id)

    if (indice === -1) {
        return null
    }

    sessao[indice] = { ...sessao[indice], ...dados }

    await fs.writeFile("sessao.json", JSON.stringify(sessao, null, 2))
    return sessao[indice]
}

const fs = require("fs/promises")

async function remover(id) {
    const conteudo = await fs.readFile("sessoes.json", "utf-8")
    const sessoes = JSON.parse(conteudo)

    const restantes = sessoes.filter(s => s.id !== id)

    if (restantes.length === sessoes.length) {
        return false
    }

    await fs.writeFile("sessoes.json", JSON.stringify(restantes, null, 2))
    return true
}

module.exports = { listar, salvar, atualizar, remover }