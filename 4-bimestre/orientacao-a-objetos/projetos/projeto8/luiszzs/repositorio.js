
const fs = require('fs/promises')

const ARQUIVO = process.env.ARQUIVO_SESSOES || 'SESSOES.json'

async function listar() {
  try {
    const conteudo = await fs.readFile(ARQUIVO, 'utf-8')
    return JSON.parse(conteudo)
  } catch (erro) {
    return []
  }
}

async function salvar(sessao) {
  const lista = await listar()

  lista.push(sessao)

  await fs.writeFile(
    ARQUIVO, JSON.stringify(lista, null, 2)
)

  return sessao
}

async function atualizar(id, dados) {
  const lista = await listar()

  const indice = lista.findIndex(s => s.id === id)

  if (indice === -1) {
    return null
  }

  lista[indice] = {...lista[indice], ...dados, id: lista[indice].id}

  await fs.writeFile(
    ARQUIVO,
    JSON.stringify(lista, null, 2)
  )

  return lista[indice]
}

async function remover(id) {
  const lista = await listar()

  const indice = lista.findIndex(s => s.id === id)

  if (indice === -1) {
    return false
  }

  lista.splice(indice, 1)

  await fs.writeFile(
    ARQUIVO,
    JSON.stringify(lista, null, 2)
  )

  return true
}

async function contar() {
    const lista = await listar()

    if(ARQUIVO == -1){
        return 0
    }

    return lista.length
}

module.exports = { listar, salvar, atualizar, remover, contar}