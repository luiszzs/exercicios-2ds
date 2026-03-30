const p = document.getElementById("texto")
const botao = document.getElementById("mudarEstilo")

botao.addEventListener("click", () => {
    texto.style.color = "blue"
    texto.style.fontSize = "24px"
    texto.classList.add("destaque")
})