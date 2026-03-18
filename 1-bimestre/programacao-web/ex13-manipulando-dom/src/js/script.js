const mensagem = document.getElementById("mensagem")
const botao = document.getElementById("botao")

botao.addEventListener("click", function mudarTexto () {
    mensagem.textContent = "Mensagem alterada com JavaScript"
})